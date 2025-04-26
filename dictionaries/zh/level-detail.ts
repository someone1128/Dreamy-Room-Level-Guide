import levels from "@/data/levels";

export const levelDetail = {
  breadcrumb: {
    levelList: "关卡列表",
  },
  notFound: {
    title: "关卡未找到",
    description: "抱歉，您要查找的关卡不存在",
    backToList: "返回关卡列表",
  },
  levelNumber: "关卡",
  levelRange: {
    prefix: "第",
    suffix: "天",
  },
  meta: {
    title: `Dreamy Room 第 {{level}} 关 - 游戏指南与攻略 - Dreamy Room {{level}} & 视频提示`,
    description: `Dreamy Room {{level}}, Dreamy Room 第 {{level}} 关完整指南，提供详细的整理技巧、物品放置解决方案和视频攻略。帮助您轻松完成关卡，打造完美的舒适生活空间。`,
    siteName: "Dreamy Room官方攻略站",
    invalidId: {
      title: "无效的关卡编号",
      description: `请输入有效的关卡编号（1-${levels.length}）`,
    },
    notFound: {
      title: "关卡不存在",
      description: "您访问的关卡不存在，请选择其他关卡",
    },
    langNotFound: {
      title: "语言包未找到",
      description: "当前语言的翻译内容未找到，请切换其他语言",
    },
  },
} as const;

export default levelDetail;
