export const useProjects = () => {
  const projects = ref([
    {
      projectTitle: "Lulu",
      projectId: 1,
      videoId: "mRTKk2jQAa0",
      dossierPath: "/dossiers/Dossier_Lulu_2026-en.pdf",
      showDetails: false,
      length: "45-60",
      stage: "indoor",
    },
    {
      projectTitle: "Ah Bah Bravo!",
      showDetails: false,
      projectId: 2,
      videoId: "nIY84br9loQ",
      dossierPath: "/dossiers/AhBahBravo_2026_compressed.pdf",
      length: "25",
      stage: "outdoor",
    },

    {
      projectTitle: "Stone",
      videoId: "9cfrJuHebWM",
      projectId: 3,
      showDetails: false,
      length: "5",
      stage: "flexible",
    },
    {
      projectTitle: "Forgotten",
      videoId: "_9mTJzKfU1s",
      projectId: 4,
      showDetails: false,
      length: "5",
      stage: "indoor",
    },
  ]);
  return { projects };
};
