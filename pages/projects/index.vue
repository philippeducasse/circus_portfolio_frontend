<template>
  <h3 class="text-center py-8 px-4">{{ $t("projects_header") }}</h3>

  <div class="flex flex-col items-center mt-4 mb-4 text-left">
    <div class="flex flex-col lg:flex-row mt-10 md:mt-20 mb-5 gap-10 w-full max-w-6xl">
      <div class="flex flex-col justify-evenly flex-1 p-4">
        <h2 class="text-left mb-6 md:mb-12">Lulu</h2>
        <p class="">{{ $t("lulu") }}</p>
      </div>
      <div class="relative w-screen lg:w-[60%] max-w-4xl aspect-video">
        <iframe
          class="absolute w-full h-full"
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
      <div class="flex flex-col justify-evenly flex-1 p-4">
        <h2 class="text-left mb-6 md:mb-12">Ah Bah Bravo!</h2>
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
      <div class="flex flex-col justify-evenly flex-1 p-4">
        <h2 class="text-left mb-6 md:mb-12">Stone and other pieces</h2>
        <p>{{ $t("stone") }}</p>
      </div>
      <div class="relative w-full lg:w-[60%] max-w-4xl aspect-video">
        <iframe
          class="absolute inset-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9cfrJuHebWM?si=W3buOYupIrQM5P42"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
