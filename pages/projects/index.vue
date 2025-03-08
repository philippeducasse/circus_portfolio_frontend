<template>
  <h2 class="text-center text-3xl font-semibold">{{ $t("projects_header") }}</h2>

  <div class="flex flex-col items-center p-4 text-left">
    <div class="flex flex-col lg:flex-row mt-20 mb-5 gap-10 w-full max-w-6xl">
      <div class="flex flex-col justify-evenly flex-1">
        <h3 class="text-center text-xl font-semibold mb-6 lg:mb-0">Lulu</h3>
        <p>{{ $t("lulu") }}</p>
      </div>
      <div class="relative w-full lg:w-[60%] max-w-4xl aspect-video">
        <iframe
          class="absolute inset-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/mRTKk2jQAa0?si=OsjYt2B87_LdDiao&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="flex my-16 gap-10 flex-col w-full max-w-6xl lg:flex-row-reverse">
      <div class="flex flex-col justify-evenly flex-1">
        <h3 class="text-center text-xl font-semibold mb-6 lg:mb-0">Ah Bah Bravo!</h3>
        <p>{{ $t("abb") }}</p>
      </div>
      <div class="relative w-full lg:w-[60%] max-w-4xl aspect-video">
        <iframe
          class="absolute inset-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/gq4O41LFR6g?si=g6Its14Au8zlKcCw&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="flex mt-5 gap-10 flex-col lg:flex-row w-full max-w-6xl">
      <div class="flex flex-col justify-evenly flex-1">
        <h3 class="text-center text-xl font-semibold mb-6 lg:mb-0">Stone and other pieces</h3>
        <p>{{ $t("stone") }}</p>
      </div>
      <div class="relative w-full lg:w-[60%] max-w-4xl aspect-video">
        <iframe
          class="absolute inset-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/9cfrJuHebWM?si=OsjYt2B87_LdDiao&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
