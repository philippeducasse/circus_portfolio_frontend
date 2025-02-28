<template>
  <h2>{{ $t("projects_header") }}</h2>
  <div class="flex flex-col items-center p-4 text-left">
    <div class="flex flex-col lg:flex-row mt-20 mb-5 gap-10">
      <div class="flex flex-col justify-evenly">
        <h3 class="text-center">Lulu</h3>
        <p>{{ $t("lulu") }}</p>
      </div>
      <div class="youtube-container">
        <iframe
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
    <div class="flex my-16 gap-10">
      <div class="youtube-container">
        <iframe
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
      <div class="flex flex-col justify-evenly">
        <h3 class="text-center">Ah Bah Bravo!</h3>
        <p>{{ $t("abb") }}</p>
      </div>
    </div>
    <div class="flex mt-5 gap-10">
      <div class="flex flex-col justify-evenly">
        <h3 class="text-center">Stone and other pieces</h3>
        <p>{{ $t("stone") }}</p>
      </div>
      <div class="youtube-container">
        <iframe
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

<script setup lang="ts"></script>

<style scoped></style>
