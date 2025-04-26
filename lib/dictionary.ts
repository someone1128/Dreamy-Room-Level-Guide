import "server-only";
import type { Locale } from "@/i18n";

// 定义字典类型
type Dictionary = {
  [key: string]: any;
};

const dictionaries = {
  en: () => import("@/dictionaries/en").then((module) => module.default),
  ru: () => import("@/dictionaries/ru").then((module) => module.default),
  zh: () => import("@/dictionaries/zh").then((module) => module.default),
  tw: () => import("@/dictionaries/tw").then((module) => module.default),
  ja: () => import("@/dictionaries/ja").then((module) => module.default),
  ko: () => import("@/dictionaries/ko").then((module) => module.default),
  de: () => import("@/dictionaries/de").then((module) => module.default),
  es: () => import("@/dictionaries/es").then((module) => module.default),
  fr: () => import("@/dictionaries/fr").then((module) => module.default),
  fil: () => import("@/dictionaries/fil").then((module) => module.default),
  id: () => import("@/dictionaries/id").then((module) => module.default),
  kk: () => import("@/dictionaries/kk").then((module) => module.default),
  ms: () => import("@/dictionaries/ms").then((module) => module.default),
  vi: () => import("@/dictionaries/vi").then((module) => module.default),
  "en-AU": () =>
    import("@/dictionaries/en-AU").then((module) => module.default),
  nl: () => import("@/dictionaries/nl").then((module) => module.default),
  "es-MX": () =>
    import("@/dictionaries/es-MX").then((module) => module.default),
  it: () => import("@/dictionaries/it").then((module) => module.default),
  pt: () => import("@/dictionaries/pt").then((module) => module.default),
  th: () => import("@/dictionaries/th").then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const dictionary = dictionaries[locale as keyof typeof dictionaries];
  if (!dictionary) {
    throw new Error(`Dictionary not found for locale: ${locale}`);
  }
  return dictionary();
};
