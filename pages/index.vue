<script setup lang="ts">
// definePageMeta({ ssr: false }) // CSR opcional de esta página
const { data: movies, pending, error } = await useAsyncData('movies', () => $fetch('/api/movies'))
const query = ref('')
const filtered = computed(() => {
  const q = query.value.toLowerCase()
  return (movies.value || []).filter((m: any) => m.title.toLowerCase().includes(q))
})
</script>
<template>
  <main class="container">
    <h1>MCU · Películas</h1>
    <input class="search" v-model="query" placeholder="Buscar película…" />
    <p v-if="pending">Cargando…</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <div v-else class="grid">
      <MovieCard v-for="m in filtered" :key="m.id" :title="m.title" :cover="m.cover" :to="`/movie/${m.id}`" />
    </div>
  </main>
</template>