import levels from "@/data/levels";

export const level = {
  title: `Dreamy Room Game Level Guide, Complete Walkthrough for Levels 1-${levels.length}`,
  subtitle: `Complete Walkthrough for ${levels.length} Levels | Organization Tips | Room Layout Solutions`,
  searchPlaceholder: `Enter level number (1-${levels.length})`,
  levelRange: {
    start: "Level ",
    end: "",
  },
  levelNumber: "Level",
  meta: {
    title: `Dreamy Room Game Guide | Complete Video Walkthrough for Levels 1-${levels.length} | Organization Tips`,
    description: `Official Dreamy Room game guide website, providing complete walkthroughs for levels 1-${levels.length}, including detailed organization tips, item placement solutions, and video guides. Help you easily complete levels and create the perfect cozy living space.`,
    keywords:
      "Dreamy Room guide, Dreamy Room walkthrough, Organization game guide, Room decoration game, Organization game tips, Healing game, Stress relief game",
    siteName: "Dreamy Room Official Guide",
    author: "Dreamy Room Guide Team",
    category: "Game Guide",
    classification: "Casual Puzzle Game",
  },
} as const;

export default level;
