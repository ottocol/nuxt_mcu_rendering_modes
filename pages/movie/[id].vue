<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string
// definePageMeta({ ssr: false }) // CSR opcional de esta página
const MCU_API_URL = `https://mcuapi.up.railway.app/api/v1/movies/${id}`

const { data: movie, pending, error } = await useFetch(MCU_API_URL, {
  transform: (m) => ({
    id: m.id || m.imdb_id || m.title,
    title: m.title,
    cover: m.cover_url || m.poster_url || '',
    box_office: Number(m.box_office).toLocaleString() || null,
    release_date: m.release_date || m.release || null,
    overview: m.overview || m.synopsis || null
  })
})

// Computed para formatear fecha
const formattedDate = computed(() => {
  if (!movie.value?.release_date) return null
  const d = new Date(movie.value.release_date)
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(d)
})

</script>
<template>
  <main class="container">
    <div class="breadcrumbs"><NuxtLink to="/">← Volver</NuxtLink></div>
    <p v-if="pending">Cargando…</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <article v-else class="details">
      <img class="poster" :src="movie.cover" :alt="movie.title" />
      <section class="meta">
        <h1 style="margin-top:0">{{ movie.title }}</h1>
        <p v-if="movie.release_date"><strong>Fecha:</strong> {{ formattedDate }}</p>
        <p v-if="movie.duration"><strong>Duración:</strong> {{ movie.duration }} min</p>
        <p v-if="movie.directed_by"><strong>Dirección:</strong> {{ movie.directed_by }}</p>
        <p v-if="movie.box_office"><strong>Taquilla:</strong> {{ movie.box_office }}</p>
        <p v-if="movie.overview" style="margin-top:.75rem">{{ movie.overview }}</p>
      </section>
    </article>
  </main>
</template>