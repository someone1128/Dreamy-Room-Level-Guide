import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "Level List",
  },
  notFound: {
    title: "Level Not Found",
    description: "Sorry, the level you are looking for does not exist",
    backToList: "Back to Level List",
  },
  levelNumber: "Level",
  levelRange: {
    prefix: "Day",
    suffix: "",
  },
  meta: {
    title: `Dreamy Room Level {{level}} - Game Guide and Walkthrough & Video Tips`,
    description: `Dreamy Room {{level}}, Complete guide for Dreamy Room Level {{level}}, providing detailed organization tips, item placement solutions, and video walkthroughs. Help you easily complete the level and create the perfect cozy living space.`,
    siteName: "Dreamy Room Official Guide",
    invalidId: {
      title: "Invalid Level Number",
      description: `Please enter a valid level number (1-${levels.length})`,
    },
    notFound: {
      title: "Level Does Not Exist",
      description:
        "The level you are trying to access does not exist, please select another level",
    },
    langNotFound: {
      title: "Language Pack Not Found",
      description:
        "Translation content for current language not found, please switch to another language",
    },
  },
} as const;

export default levelDetail;
