export type PublicationType = "Journal" | "Conference" | "Preprint" | "Dataset" | "Review";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  citations?: number;
  selected?: boolean;
  abstract?: string;
  links: {
    scholar?: string;
    pdf?: string;
    code?: string;
    project?: string;
    bibtex?: string;
  };
};

export const publications: Publication[] = [
  {
    title: "A novel role of tRNA-derived fragments in porcine granulosa-oocyte cell communication and cuproptosis",
    authors: "L Shen, X Zhao, S Wu, Y Lei, S Liang, S Wang, H Dai, Y Wang, L Chen, ...",
    venue: "PLoS Genetics 22 (4), e1012119",
    year: 2026,
    type: "Journal",
    selected: true,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:YOwf2qJgpHMC"
    }
  },
  {
    title: "Cooked meat-derived extracellular vesicles ssc-miR-1 induces metabolic disorders in the mice liver via PI3k/AKT pathway",
    authors: "L Shen, J Ma, S Liang, Y Yang, T Liao, Y Lei, L Chen, Y Wang, Y Zhao, ...",
    venue: "npj Science of Food",
    year: 2026,
    type: "Journal",
    selected: true,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:MXK_kJrjxJIC"
    }
  },
  {
    title: "The taste of rebirth: a dual exploration of Wuhuang pork Flavoromics and metabolomics",
    authors: "Y Yang, M Gan, Y Wu, H Zhang, H Dan, Y Zou, T Liao, Y Lei, L Niu, ...",
    venue: "Journal of Agriculture and Food Research, 102695",
    year: 2026,
    type: "Journal",
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:8k81kl-MbHgC"
    }
  },
  {
    title: "Advances in understanding the role of gut microbiota in fat deposition and lipid metabolism",
    authors: "Y Zhong, Y Lei, S Jiang, D Chen, X Wang, K Wang, T Liao, R Liao, M Gan, ...",
    venue: "Journal of Animal Science and Biotechnology 16 (1), 152",
    year: 2025,
    type: "Review",
    citations: 12,
    selected: true,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:0EnyYjriUFMC"
    }
  },
  {
    title: "Perspectives on mitochondrial dysfunction in the regeneration of aging skeletal muscle",
    authors: "K Wang, M Gan, Y Lei, T Liao, J Li, L Niu, Y Zhao, L Chen, Y Wang, L Zhu, ...",
    venue: "Cellular & Molecular Biology Letters 30 (1), 94",
    year: 2025,
    type: "Review",
    citations: 12,
    selected: true,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:_FxGoFyzp5QC"
    }
  },
  {
    title: "Carcass and meat quality characteristics and changes of lean and fat pigs after the growth turning point",
    authors: "T Liao, M Gan, Y Zhu, Y Lei, Y Yang, Q Zheng, L Niu, Y Zhao, L Chen, ...",
    venue: "Foods 14 (15), 2719",
    year: 2025,
    type: "Journal",
    citations: 6,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:LkGwnXOMwfcC"
    }
  },
  {
    title: "Advanced exploration of metabolite variation and the role of key differential metabolites during the ripening process of PSE pork",
    authors: "L Shen, Y Lei, T Liao, K Wang, H Zhang, H Dan, L Niu, Y Zhao, L Chen, ...",
    venue: "Food Chemistry 484, 144325",
    year: 2025,
    type: "Journal",
    citations: 5,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:W7OEmFMy1HYC"
    }
  },
  {
    title: "The Mechanism of Ferroptosis Regulating Granulosa Cell Apoptosis and Oxidative Stress Through the NF-kB/PTGS2 Axis in Porcine Atretic Follicles",
    authors: "Y Yang, Y He, M Gan, X Zhao, T Liao, Y Lei, L Chen, L Niu, Y Zhao, ...",
    venue: "Antioxidants 14 (9), 1071",
    year: 2025,
    type: "Journal",
    citations: 4,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:roLk4NBRz8UC"
    }
  },
  {
    title: "Single-cell RNA sequencing and PANDORA-seq reveal the pivotal role of piRNA in heat stress-induced testicular injury",
    authors: "M Gan, J Ma, Y Lei, Y Yang, Y Pan, S Wu, J Li, L Shen, L Zhu",
    venue: "International Journal of Biological Macromolecules 319, 145674",
    year: 2025,
    type: "Journal",
    citations: 2,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:ufrVoPGSRksC"
    }
  },
  {
    title: "The role of mitochondrial dynamics and mitophagy in skeletal muscle atrophy: from molecular mechanisms to therapeutic insights",
    authors: "Y Lei, M Gan, Y Qiu, Q Chen, X Wang, T Liao, M Zhao, L Chen, S Zhang, ...",
    venue: "Cellular & Molecular Biology Letters 29 (1), 59",
    year: 2024,
    type: "Review",
    citations: 85,
    selected: true,
    abstract:
      "A synthesis of mitochondrial dynamics, mitophagy, and therapeutic opportunities in skeletal muscle atrophy.",
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:UeHWp8X0CEIC"
    }
  },
  {
    title: "A dataset of hidden small non-coding RNA in the testis of heat-stressed models revealed by Pandora-seq",
    authors: "M Gan, Y Lei, K Wang, Y Wang, T Liao, J Ma, L Zhu, L Shen",
    venue: "Scientific Data 11 (1), 747",
    year: 2024,
    type: "Dataset",
    citations: 8,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:d1gkVwhDpl0C"
    }
  },
  {
    title: "Comprehensive review on lipid metabolism and RNA methylation: Biological mechanisms, perspectives and challenges",
    authors: "X Wang, M Gan, Y Wang, S Wang, Y Lei, K Wang, X Zhang, L Chen, ...",
    venue: "International Journal of Biological Macromolecules 270, 132057",
    year: 2024,
    type: "Review",
    citations: 3,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:9yKSN-GCB0IC"
    }
  },
  {
    title: "Whole transcriptome sequencing analysis reveals the effect of circzfyve9/mir-378a-3p/immt axis on mitochondrial function in adipocytes",
    authors: "Y Qiu, M Gan, X Wang, T Liao, Y Tang, Q Chen, Y Lei, L Chen, J Wang, ...",
    venue: "International Journal of Biological Macromolecules 281, 136916",
    year: 2024,
    type: "Journal",
    citations: 2,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:Tyk-4Ss8FVUC"
    }
  },
  {
    title: "The global perspective on peroxisome proliferator-activated receptor gamma (PPARgamma) in ectopic fat deposition: A review",
    authors: "Y Qiu, M Gan, X Wang, T Liao, Q Chen, Y Lei, L Chen, J Wang, Y Zhao, ...",
    venue: "International Journal of Biological Macromolecules 253, 127042",
    year: 2023,
    type: "Review",
    citations: 89,
    selected: true,
    abstract:
      "A global review of PPARgamma biology in ectopic fat deposition and metabolic regulation.",
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:IjCSPb-OGe4C"
    }
  },
  {
    title: "tRNA-derived small RNA, 5'tiRNA-Gly-CCC, promotes skeletal muscle regeneration through the inflammatory response",
    authors: "L Shen, T Liao, Q Chen, Y Lei, L Wang, H Gu, Y Qiu, T Zheng, Y Yang, ...",
    venue: "Journal of Cachexia, Sarcopenia and Muscle 14 (2), 1033-1045",
    year: 2023,
    type: "Journal",
    citations: 45,
    selected: true,
    abstract:
      "Reports a tRNA-derived small RNA axis associated with inflammatory response during skeletal muscle regeneration.",
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:qjMakFHDy7sC"
    }
  },
  {
    title: "Dynamic changes in the transcriptome of tRNA-derived small RNAs related with fat metabolism",
    authors: "T Liao, M Gan, Y Lei, Y Wang, L Chen, L Shen, L Zhu",
    venue: "Scientific Data 10 (1), 703",
    year: 2023,
    type: "Dataset",
    citations: 9,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:zYLM7Y9cAGgC"
    }
  },
  {
    title: "tsRNA landscape and potential function network in subcutaneous and visceral pig adipose tissue",
    authors: "L Wang, H Gu, T Liao, Y Lei, Y Qiu, Q Chen, L Chen, S Zhang, J Wang, ...",
    venue: "Genes 14 (4), 782",
    year: 2023,
    type: "Journal",
    citations: 8,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:2osOgNQ5qMEC"
    }
  },
  {
    title: "A Novel tRNA-Derived Fragment, tRFGlnCTG, Regulates Angiogenesis by Targeting Antxr1 mRNA",
    authors: "Q Chen, L Shen, T Liao, Y Qiu, Y Lei, X Wang, L Chen, Y Zhao, L Niu, ...",
    venue: "International Journal of Molecular Sciences 24 (19), 14552",
    year: 2023,
    type: "Journal",
    citations: 6,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:u5HHmVD_uO8C"
    }
  },
  {
    title: "miRNAs derived from cobra venom exosomes contribute to the cobra envenomation",
    authors: "T Liao, M Gan, Y Qiu, Y Lei, Q Chen, X Wang, Y Yang, L Chen, Y Zhao, ...",
    venue: "Journal of Nanobiotechnology 21 (1), 356",
    year: 2023,
    type: "Journal",
    citations: 4,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:u-x6o8ySG0sC"
    }
  },
  {
    title: "高低肌内脂肪猪背最长肌关键基因表达差异分析",
    authors: "谭娅, 李亮, 雷宇航, 黄志洋, 赵春萍, 张静, 张正群, 齐婧, 朱砺, 史开志",
    venue: "南方农业学报 53 (4), 899-907",
    year: 2022,
    type: "Journal",
    citations: 1,
    links: {
      scholar:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:Zph67rFs4hoC"
    }
  }
];
