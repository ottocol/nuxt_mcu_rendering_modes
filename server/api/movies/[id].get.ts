export default defineCachedEventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const url = `https://mcuapi.up.railway.app/api/v1/movies/${id}`
  const m: any = await $fetch(url)
  const d = (m && m.data) ? m.data : m
  return {
    id: d.id ?? d.imdb_id ?? d.title,
    title: d.title,
    cover: d.cover_url || d.poster_url || '',
    release_date: d.release_date ?? d.release ?? null,
    directed_by: d.directed_by ?? d.director ?? null,
    box_office: Number(d.box_office).toLocaleString() ?? null,
    duration: d.duration ?? d.runtime ?? null,
    overview: d.overview ?? d.synopsis ?? null
  }
}, { maxAge: 60 * 60 })