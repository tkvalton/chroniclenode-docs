<script setup lang="ts">
// A screenshot. It shows the image from /screenshots/<name>.png when the file exists and takes no room when it does not,
// so pages can name their screenshots before the pictures are taken.
import { ref } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{ name: string; caption?: string }>()
const missing = ref(false)
</script>

<template>
  <figure v-if="!missing" class="shot">
    <img :src="withBase('/screenshots/' + props.name + '.png')" :alt="props.caption ?? props.name" loading="lazy" @error="missing = true" />
    <figcaption v-if="props.caption">{{ props.caption }}</figcaption>
  </figure>
</template>

<style scoped>
.shot { margin: 20px 0; text-align: center; }
.shot img { max-width: 100%; border: 1px solid var(--vp-c-divider); border-radius: 4px; }
.shot figcaption { margin-top: 6px; font-size: 0.85rem; color: var(--vp-c-text-2); }
</style>
