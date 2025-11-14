/** @type {import('nuxt/schema').NuxtConfig} */
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'MCU · Nuxt CSR/SSR/SSG',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
  // 1) SSR (por defecto)
  // -> No hagas nada: deja TODO lo de abajo comentado.
  // ===========================


  // ===========================
  // 2) CSR GLOBAL (SPA para toda la app)
  // -> Descomenta esta línea:
   ssr: false,
  // ===========================


  // ===========================
  // 3) CSR SOLO EN CIERTAS RUTAS (p.ej. la home '/')
  // -> Usa routeRules para forzar CSR en rutas concretas:
  // routeRules: {
  //   '/': { ssr: false },
  // },
  // ===========================


  // ===========================
  // 4) SSG / PRERENDER (generación estática)
  // Opción A: marcar rutas a prerender con Nitro:
  // nitro: {
  //   prerender: {
  //     routes: ['/'], 
  //     crawlLinks: true
  //   },
  // },
  //
  // Opción B: usando routeRules:
  // routeRules: {
  //   '/': { prerender: true },
  // },
  //
  // Comandos:
  //   npm run generate && npm run preview
  // ===========================


  // Nota: si necesitas combinar varias reglas, usa un único bloque:
  // routeRules: {
  //   '/': { ssr: false },       // CSR solo en '/'
  //   '/about': { prerender: true }, // SSG en '/about'
  // }
})
