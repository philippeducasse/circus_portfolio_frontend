<template>
  <div class="px-5">
    <div class="flex flex-col gap-6">
      <div class="">
        <h2>{{ $t("support_finance") }}</h2>
        <div class="flex gap-6 justify-center flex-wrap items-center my-16">
          <div class="bg-white h-fit pt-2 pl-2 min-w-fit">
            <NuxtImg
              src="/img/support/bundes.png"
              width="250"
              class=""
              height="30"
              alt="Beauftragt für Bundesregierung und Kunst"
            />
          </div>
          <NuxtImg src="/img/support/nsk.jpg" width="160" class="" alt="Neustart Kultur" />
          <NuxtImg src="/img/support/gvl.jpg" width="160" class="" alt="GVL" />
        </div>
      </div>

      <div class="">
        <h2>{{ $t("support_artistic") }}</h2>
        <div class="flex gap-6 justify-center flex-wrap items-center mt-16">
          <NuxtImg src="/img/support/katapult.png" width="200" height="60" alt="katapult" />
          <NuxtImg src="/img/support/zm.jpg" width="150" height="150" alt="Zirkus Mond" />
          <NuxtImg src="/img/support/vuesch.png" width="150" class="" alt="Vuesch" />
          <NuxtImg src="/img/support/ufer.png" width="200" class="" alt="Ufer Studios" />
          <NuxtImg src="/img/support/schatz.png" width="200" class="" alt="Schatzinsel" />
          <NuxtImg src="/img/support/Noctambules.png" width="200" class="" alt="Noctambules" />
          <div class="bg-white h-fit p-2">
            <NuxtImg src="/img/support/etage.png" width="200" class="" alt="Die Etage" />
          </div>
          <NuxtImg src="/img/support/crac.png" width="120" class="" alt="CRAC" />
          <NuxtImg src="/img/support/acud.jpg" width="120" class="" alt="ACUD" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
