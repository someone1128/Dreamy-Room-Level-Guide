export const features = {
  title: "核心特性",
  subtitle: "探索使 DeepSeek V3 脱颖而出的强大功能",
  items: [
    {
      title: "先进的 MoE 架构",
      description:
        "革命性的6710亿参数模型，每个词元仅激活370亿参数，通过创新的负载均衡实现最佳效率",
      iconName: "Brain",
      details: [
        "多头潜在注意力（MLA）",
        "无辅助损失的负载均衡",
        "DeepSeekMoE 架构",
        "多词元预测目标",
      ],
    },
    {
      title: "最先进的性能",
      description:
        "在多个基准测试中取得卓越成果，包括 MMLU (87.1%)、BBH (87.5%) 和数学推理任务",
      iconName: "Gauge",
      details: ["编程竞赛最高分", "高级数学计算", "多语言能力", "复杂推理任务"],
    },
    {
      title: "高效训练",
      description:
        "突破性的训练方法仅需278.8万小时 H800 GPU，成本效率显著，仅需550万美元",
      iconName: "Cpu",
      details: [
        "FP8混合精度训练",
        "优化的训练框架",
        "稳定的训练过程",
        "无需回滚",
      ],
    },
    {
      title: "灵活部署",
      description:
        "支持 NVIDIA、AMD GPU 和华为昇腾 NPU 的多种部署选项，实现灵活集成",
      iconName: "Globe2",
      details: ["云端部署就绪", "本地推理支持", "多硬件平台", "优化的服务选项"],
    },
    {
      title: "先进的编程能力",
      description:
        "在编程任务中表现卓越，在竞赛编程和实际开发场景中都有出色表现",
      iconName: "Code",
      details: ["多语言支持", "代码补全", "错误检测", "代码优化"],
    },
    {
      title: "企业级安全",
      description: "全面的安全措施和合规功能，适用于企业部署和集成",
      iconName: "Shield",
      details: ["访问控制", "数据加密", "审计日志", "合规就绪"],
    },
    {
      title: "海量训练数据",
      description:
        "在14.8万亿多样化、高质量的词元上预训练，确保广泛的知识和能力",
      iconName: "Database",
      details: ["多样化数据源", "质量过滤内容", "多领域覆盖", "定期更新"],
    },
    {
      title: "创新领导力",
      description: "通过开放协作和持续创新，引领人工智能技术的进步",
      iconName: "Sparkles",
      details: ["研究领导力", "开放协作", "社区驱动", "持续改进"],
    },
  ],
} as const;
