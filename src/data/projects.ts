export type Project = {
  title: string;
  summary: string;
  image: string;
  keywords: string[];
  links?: {
    paper?: string;
    code?: string;
    project?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Non-coding RNA regulation in animal tissues",
    summary:
      "Integrating tsRNA, miRNA, piRNA, and PANDORA-seq evidence to understand how small RNAs regulate cell communication, stress responses, and tissue function.",
    image: "/images/project-ncrna.svg",
    keywords: ["ncRNAs", "tsRNA", "PANDORA-seq", "cell communication"],
    links: {
      paper:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:YOwf2qJgpHMC"
    }
  },
  {
    title: "Skeletal muscle regeneration and atrophy",
    summary:
      "Studying inflammatory response, mitochondrial dynamics, mitophagy, and aging-related pathways that shape skeletal muscle regeneration and degeneration.",
    image: "/images/project-muscle.svg",
    keywords: ["muscle regeneration", "muscle atrophy", "mitophagy", "mitochondria"],
    links: {
      paper:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:UeHWp8X0CEIC"
    }
  },
  {
    title: "Fat deposition and lipid metabolism",
    summary:
      "Exploring adipose tissue, gut microbiota, PPARgamma signaling, RNA methylation, and multi-omics datasets linked to lipid metabolism and meat quality.",
    image: "/images/project-metabolism.svg",
    keywords: ["fat deposition", "lipid metabolism", "gut microbiota", "multi-omics"],
    links: {
      paper:
        "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=zD7nHbYAAAAJ&citation_for_view=zD7nHbYAAAAJ:0EnyYjriUFMC"
    }
  }
];
