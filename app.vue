<template><NuxtPage /></template>
<style>
:root { --wrap: 980px; }
body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; }
.container { max-width: var(--wrap); margin: 2rem auto; padding: 0 1rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }
.card { display: flex; flex-direction: column; gap: 6px; }
a.card-link { text-decoration: none; color: inherit; }
img.poster { width: 100%; height: 240px; object-fit: cover; border-radius: 8px; }
input.search { padding: .6rem; width: 100%; margin: .75rem 0; border: 1px solid #ddd; border-radius: 8px; }
.breadcrumbs { color: #666; font-size: 0.9rem; margin-bottom: 0.75rem; }
.details { display: grid; grid-template-columns: 260px 1fr; gap: 16px; align-items: start; }
.meta { font-size: .95rem; color: #444; line-height: 1.5; }
</style>