"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function clampProgress(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function useProgressAnimator(targetProgress: number, isActive: boolean) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const targetRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const resetFrameRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const cancelResetFrame = useCallback(() => {
    if (resetFrameRef.current !== null) {
      window.cancelAnimationFrame(resetFrameRef.current);
      resetFrameRef.current = null;
    }
  }, []);

  useEffect(() => {
    targetRef.current = clampProgress(targetProgress);
  }, [targetProgress]);

  useEffect(() => {
    if (!isActive) {
      stopTimer();
      cancelResetFrame();
      return;
    }

    if (timerRef.current !== null) {
      return;
    }

    cancelResetFrame();
    resetFrameRef.current = window.requestAnimationFrame(() => {
      setDisplayProgress(0);
    });

    timerRef.current = window.setInterval(() => {
      setDisplayProgress((current) => {
        const target = targetRef.current;
        const diff = target - current;
        if (Math.abs(diff) <= 0.5) {
          if (target >= 100) {
            stopTimer();
          }
          return clampProgress(target);
        }
        const delta = Math.max(Math.min(diff * 0.25, 5), -5);
        return clampProgress(current + delta);
      });
    }, 80);

    return () => {
      stopTimer();
      cancelResetFrame();
    };
  }, [isActive, stopTimer, cancelResetFrame]);

  useEffect(
    () => () => {
      stopTimer();
      cancelResetFrame();
    },
    [stopTimer, cancelResetFrame],
  );

  return displayProgress;
}
