<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string
// definePageMeta({ ssr: false }) // CSR opcional de esta página
const { data: movie, pending, error } = await useAsyncData(
  () => $fetch(`/api/movies/${id}`),
  { key: `movie-${id}` }
)
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
        <p v-if="movie.release_date"><strong>Fecha:</strong> {{ movie.release_date }}</p>
        <p v-if="movie.duration"><strong>Duración:</strong> {{ movie.duration }} min</p>
        <p v-if="movie.directed_by"><strong>Dirección:</strong> {{ movie.directed_by }}</p>
        <p v-if="movie.box_office"><strong>Taquilla:</strong> {{ movie.box_office }}</p>
        <p v-if="movie.overview" style="margin-top:.75rem">{{ movie.overview }}</p>
      </section>
    </article>
  </main>
</template>