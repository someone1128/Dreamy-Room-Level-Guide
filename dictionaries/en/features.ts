export const features = {
  title: "Key Features",
  subtitle:
    "Discover the powerful capabilities that make DeepSeek V3 stand out",
  items: [
    {
      title: "Advanced MoE Architecture",
      description:
        "Revolutionary 671B parameter model with only 37B activated per token, achieving optimal efficiency through innovative load balancing",
      iconName: "Brain",
      details: [
        "Multi-head Latent Attention (MLA)",
        "Auxiliary-loss-free load balancing",
        "DeepSeekMoE architecture",
        "Multi-token prediction objective",
      ],
    },
    {
      title: "State-of-the-Art Performance",
      description:
        "Exceptional results across multiple benchmarks including MMLU (87.1%), BBH (87.5%), and mathematical reasoning tasks",
      iconName: "Gauge",
      details: [
        "Top scores in coding competitions",
        "Advanced mathematical computation",
        "Multilingual capabilities",
        "Complex reasoning tasks",
      ],
    },
    {
      title: "Efficient Training",
      description:
        "Groundbreaking training approach requiring only 2.788M H800 GPU hours, with remarkable cost efficiency of $5.5M",
      iconName: "Cpu",
      details: [
        "FP8 mixed precision training",
        "Optimized training framework",
        "Stable training process",
        "No rollbacks required",
      ],
    },
    {
      title: "Versatile Deployment",
      description:
        "Multiple deployment options supporting NVIDIA, AMD GPUs and Huawei Ascend NPUs for flexible integration",
      iconName: "Globe2",
      details: [
        "Cloud deployment ready",
        "Local inference support",
        "Multiple hardware platforms",
        "Optimized serving options",
      ],
    },
    {
      title: "Advanced Coding Capabilities",
      description:
        "Superior performance in programming tasks, excelling in both competitive coding and real-world development scenarios",
      iconName: "Code",
      details: [
        "Multi-language support",
        "Code completion",
        "Bug detection",
        "Code optimization",
      ],
    },
    {
      title: "Enterprise-Ready Security",
      description:
        "Comprehensive security measures and compliance features for enterprise deployment and integration",
      iconName: "Shield",
      details: [
        "Access control",
        "Data encryption",
        "Audit logging",
        "Compliance ready",
      ],
    },
    {
      title: "Extensive Training Data",
      description:
        "Pre-trained on 14.8T diverse and high-quality tokens, ensuring broad knowledge and capabilities",
      iconName: "Database",
      details: [
        "Diverse data sources",
        "Quality-filtered content",
        "Multiple domains",
        "Regular updates",
      ],
    },
    {
      title: "Innovation Leadership",
      description:
        "Pioneering advancements in AI technology through open collaboration and continuous innovation",
      iconName: "Sparkles",
      details: [
        "Research leadership",
        "Open collaboration",
        "Community driven",
        "Regular improvements",
      ],
    },
  ],
} as const;
