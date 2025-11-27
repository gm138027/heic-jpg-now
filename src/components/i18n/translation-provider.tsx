"use client";

import { createContext, useContext, useMemo } from "react";
import type { AppDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/locales";

type TranslationContextValue = {
  locale: Locale;
  messages: AppDictionary;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

type TranslationProviderProps = {
  locale: Locale;
  messages: AppDictionary;
  children: React.ReactNode;
};

export function TranslationProvider({ locale, messages, children }: TranslationProviderProps) {
  const value = useMemo(() => ({ locale, messages }), [locale, messages]);
  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useLocale() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useLocale must be used within a TranslationProvider");
  }
  return context.locale;
}

type FormatValues = Record<string, string | number>;

function interpolate(template: string, values?: FormatValues) {
  if (!values) return template;
  return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
    const value = values[key];
    return value === undefined || value === null ? "" : String(value);
  });
}

function lookup(messages: AppDictionary[keyof AppDictionary], key: string) {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, messages);
}

export function useTranslations(namespace: keyof AppDictionary = "common") {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslations must be used within a TranslationProvider");
  }

  return (key: string, values?: FormatValues) => {
    const target = context.messages[namespace];
    if (!target) return key;
    const result = lookup(target, key);
    if (typeof result === "string") {
      return interpolate(result, values);
    }
    if (result === undefined) {
      return key;
    }
    return JSON.stringify(result);
  };
}
