import levels from "@/data/levels";

export const level = {
  title: `Dreamy Room 游戏关卡攻略，1-${levels.length}完整通关指南`,
  subtitle: `${levels.length}关完整通关攻略 | 收纳整理技巧 | 房间布置方案`,
  searchPlaceholder: `输入关卡编号 (1-${levels.length})`,
  levelRange: {
    start: "第",
    end: "关",
  },
  levelNumber: "关卡",
  meta: {
    title: `Dreamy Room游戏攻略|第1到${levels.length} 关完整通关视频指南_收纳整理技巧`,
    description: `Dreamy Room游戏官方攻略网站，提供1-${levels.length}关完整图文攻略，包含详细的收纳技巧、物品摆放方案和通关视频。让您轻松通关，打造完美温馨的生活空间。`,
    keywords:
      "Dreamy Room攻略,Dreamy Room通关攻略,收纳游戏攻略,房间布置游戏,整理游戏技巧,治愈系游戏,解压游戏",
    siteName: "Dreamy Room官方攻略站",
    author: "Dreamy Room攻略组",
    category: "游戏攻略",
    classification: "休闲解谜游戏",
  },
} as const;

export default level;
