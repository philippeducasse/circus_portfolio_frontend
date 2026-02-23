export const useProjects = () => {
  const projects = ref([
    {
      title: "Lulu",
      id: 1,
      videoId: "mRTKk2jQAa0",
      dossierPath: "/dossiers/Dossier_Lulu_2026-en.pdf",
      length: "45-60",
      stage: "indoor",
    },
    {
      title: "Ah Bah Bravo!",
      id: 2,
      videoId: "nIY84br9loQ",
      dossierPath: "/dossiers/AhBahBravo_2026_compressed.pdf",
      length: "25",
      stage: "outdoor",
    },

    {
      title: "Stone",
      videoId: "9cfrJuHebWM",
      id: 3,
      length: "5",
      stage: "flexible",
    },
    {
      title: "Forgotten",
      videoId: "_9mTJzKfU1s",
      id: 4,
      length: "5",
      stage: "indoor",
    },
  ]);
  return { projects };
};
