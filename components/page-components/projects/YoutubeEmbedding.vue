<template>
  <div 
    v-if="!loaded" 
    @click="loadVideo"
    class="relative w-full h-full cursor-pointer group"
  >
    <img 
      :src="thumbnailUrl" 
      :alt="title"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-40 transition">
      <svg class="w-20 h-20 text-white" viewBox="0 0 68 48">
        <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/>
        <path d="M 45,24 27,14 27,34" fill="#fff"/>
      </svg>
    </div>
  </div>
  
  <iframe 
    v-else
    class="absolute w-full h-full"
    :src="embedUrl"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  videoId: string
  title?: string
}>()

const loaded = ref(false)

const thumbnailUrl = computed(() => 
  `https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`
)
const embedUrl = computed(() => 
  `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1`
)

const loadVideo = () => {
  loaded.value = true
}
</script>