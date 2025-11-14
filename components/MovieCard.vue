<script setup lang="ts">
defineProps<{ title: string; cover?: string; to: string }>()
</script>
<template>
  <NuxtLink :to="to" class="card-link">
    <div class="card">
      <img class="poster" :src="cover" :alt="title" loading="lazy" />
      <small>{{ title }}</small>
    </div>
  </NuxtLink>
</template>