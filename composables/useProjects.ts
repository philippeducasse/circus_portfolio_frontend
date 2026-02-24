export const useProjects = () => {
  const projects = ref([
    {
      title: "Lulu",
      id: 1,
      videoId: "mRTKk2jQAa0",
      dossierPath: "/dossiers/Dossier_Lulu_2026-en.pdf",
      length: "45-60",
      stage: "indoor",
      images: [
        {
          src: "/img/images/cropped-ejc.webp",
          alt: "artist with staff",
        },
        {
          src: "/img/images/lulu_stare.webp",
          alt: "artist staring intently",
        },
        {
          src: "/img/images/lulu_smoke.webp",
          alt: "Mime blowing out smoke",
        },
      ],
    },
    {
      title: "Ah Bah Bravo!",
      id: 2,
      videoId: "nIY84br9loQ",
      dossierPath: "/dossiers/AhBahBravo_2026_compressed.pdf",
      length: "25",
      stage: "outdoor",
      images: [
        {
          src: "/img/images/ABB5.webp",
          alt: "Artist with hulahoop",
        },
        {
          src: "/img/images/ABB7.webp",
          alt: "Street artist",
        },
        {
          src: "/img/images/ABB8.webp",
          alt: "Street artist interacting with audience",
        },
        {
          src: "/img/images/ABB4.webp",
          alt: "Artist putting on tie",
        },
      ],
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
