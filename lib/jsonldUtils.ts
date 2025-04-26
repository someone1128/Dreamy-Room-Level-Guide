import levels from "@/data/levels";
import { ensureTrailingSlash } from "@/lib/utils";
import type { Locale } from "@/i18n";
// Removed Dictionary import, using 'any' for simplicity for now.
// Define a more specific interface if needed for better type safety.

/**
 * Generates the JSON-LD ItemList schema for game levels.
 *
 * @param lang The current locale.
 * @param siteUrl The base URL of the site.
 * @param pageUrl The canonical URL of the page containing the list.
 * @param dict The dictionary object (or relevant parts) containing translations.
 * @returns The ItemList JSON-LD object.
 */
export function createLevelItemList(
  lang: Locale,
  siteUrl: string,
  pageUrl: string,
  dict: any // Using 'any' for simplicity, consider a specific interface
) {
  // Try to get specific list title/description, fall back to page meta or generic terms
  const listName =
    dict.levelShowcase?.title || dict.level?.meta?.title || "Game Levels";
  const listDescription =
    dict.levelShowcase?.subtitle ||
    dict.level?.meta?.description ||
    "List of all game levels walkthroughs."; // Consider a dedicated dict key

  return {
    "@type": "ItemList",
    // Use pageUrl in ID to ensure uniqueness across pages if this list appears elsewhere
    "@id": `${pageUrl}/#level-list`,
    name: listName,
    description: listDescription,
    numberOfItems: levels.length,
    itemListElement: levels.map((level, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${
        dict.levelShowcase?.levelTitle?.replaceAll(
          "{{level}}",
          level.id.toString()
        ) || `Level ${level.id}`
      }`,
      // Ensure absolute URL using siteUrl
      url: ensureTrailingSlash(`/${lang}/level/${level.id}`),
    })),
  };
}

// You might want to add functions for creating WebSite, Organization schemas here too if they become complex
// export function createWebSiteSchema(...) {}
// export function createOrganizationSchema(...) {}
