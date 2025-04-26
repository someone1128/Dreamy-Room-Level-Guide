import { useDictionary } from "@/hooks/useDictionary";
import { Feature } from "@/components/sections/features/types";

export function useFeatureData(): readonly Feature[] {
  const dict = useDictionary();
  return dict.features.items;
}
