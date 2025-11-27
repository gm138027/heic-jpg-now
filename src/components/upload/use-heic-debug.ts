"use client";

const DEBUG_ENABLED = process.env.NODE_ENV !== "production";
let installed = false;

export function installHeicDebugHooks() {
  if (!DEBUG_ENABLED || typeof window === "undefined" || installed) return;
  installed = true;

  const logs: Array<{ t: string; label: string; data: unknown[] }> = [];

  const record = (label: string, ...data: unknown[]) => {
    const entry = { t: new Date().toISOString(), label, data };
    logs.push(entry);
    // 仅在调试日志中输出，不让错误上报误判为真实异常
    console.debug("[heic-debug]", label, ...data);
  };

  window.addEventListener("error", (event) => {
    record("window:error", event.message, event.error);
  });

  window.addEventListener("unhandledrejection", (event) => {
    record("unhandledrejection", event.reason);
  });

  // 避免覆盖 console.error 造成重复上报，只在捕获时记录引用
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    record("console.error", ...args);
    originalError(...args);
  };

  const OriginalWorker = window.Worker;
  class PatchedWorker extends OriginalWorker {
    constructor(...args: ConstructorParameters<typeof Worker>) {
      super(...args);
      this.addEventListener("error", (event) => {
        record("worker:error", event.message, event.error);
      });
      this.addEventListener("messageerror", (event) => {
        record("worker:messageerror", event.data);
      });
    }
  }
  window.Worker = PatchedWorker;

  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const [input] = args;
    const url = typeof input === "string" ? input : input instanceof Request ? input.url : "";
    if (url?.match(/heic|wasm|libheif|convert/i)) {
      record("fetch", url);
    }
    try {
      const response = await originalFetch(...args);
      if (!response.ok && url) {
        record("fetch:failure", url, response.status, response.statusText);
      }
      return response;
    } catch (error) {
      record("fetch:error", url, error);
      throw error;
    }
  };

  (window as typeof window & { __heicDebugLogs?: typeof logs }).__heicDebugLogs = logs;
  console.info(
    "[heic-debug] hooks installed. 重现后请在控制台输入 window.__heicDebugLogs 查看详细日志。",
  );
}
