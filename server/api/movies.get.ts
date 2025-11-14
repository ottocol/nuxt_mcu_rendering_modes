export default defineCachedEventHandler(async () => {
  const url = 'https://mcuapi.up.railway.app/api/v1/movies'
  const data: any = await $fetch(url)
  //Simular que el servidor va lento
  //await new Promise((resolve) => setTimeout(resolve, 500))
  const list = Array.isArray(data) ? data : (data?.data ?? [])
  return list.map((m: any) => ({
    id: m.id ?? m.imdb_id ?? m.title,
    title: m.title,
    cover: m.cover_url || m.poster_url || '',
    release_date: m.release_date ?? m.release ?? null,
    overview: m.overview ?? m.synopsis ?? null
  }))
}, { maxAge: 60 * 60 })