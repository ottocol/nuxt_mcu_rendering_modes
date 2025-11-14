<script setup lang="ts">
// definePageMeta({ ssr: false }) // CSR opcional de esta página
const MCU_API_URL = 'https://mcuapi.up.railway.app/api/v1/movies'

//se ejecuta en servidor (SSR) o en navegador (CSR) según el modo
const { data: movies, pending, error } = await useFetch(MCU_API_URL, {
  transform: data => {
    const list = Array.isArray(data) ? data : (data && data.data ? data.data : [])
    return list.map(m => ({
      id: m.id || m.imdb_id || m.title,
      title: m.title,
      cover: m.cover_url || m.poster_url || '',
      release_date: m.release_date || m.release || null,
      overview: m.overview || m.synopsis || null
    }))
  }
})


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