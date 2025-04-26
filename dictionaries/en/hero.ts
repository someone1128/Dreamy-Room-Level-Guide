import levels from "@/data/levels";

export const hero = {
  badge: "Game Guides Collection",
  title: "View All Dreamy Room Level Guides",
  description:
    "Explore detailed walkthroughs, tips, and strategies for each room level. Enter a level number to jump directly to the corresponding guide.",
  stats: {
    guides: levels.length + "+ Level Guides",
    videoTutorials: `${levels.length}+ Video Tutorials`,
    quickSearch: "Quick Level Search",
  },
  search: {
    placeholder: `Enter level number (1-${levels.length})`,
    button: "Search Guide",
    error: {
      invalid: "Please enter a valid level number",
      notFound: "No guide found for this level",
    },
  },
  buttons: {
    browseAll: "Browse All Level Guides",
    downloadGame: "Download Game",
  },
  downloadCard: {
    title: "Download Dreamy Room",
    description: "Begin a warm and healing journey of tidying and organizing!",
  },
  videoSection: {
    title: "Game Strategy Videos",
    description:
      "Watch detailed game video tutorials to learn tidying and organizing techniques",
  },
} as const;

export default hero;
