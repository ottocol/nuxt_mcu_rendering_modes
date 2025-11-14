# Nuxt · MCU · CSR / SSR / SSG · + Detalle

Comparativa de patrones con **Nuxt 3** y MCU API. Incluye lista y **detalle** `/movie/:id`.

## Uso básico

en modo desarrollo:

```bash
npm i
npm run dev
```

## 🧭 Modos de renderizado en Nuxt 3

Podemos cambiar el modo de renderizado

| Modo | Cambios en `nuxt.config.ts` | Comando principal | Cuándo se genera el HTML | ¿Servidor dinámico? | Descripción |
|------|------------------------------|-------------------|--------------------------|---------------------|--------------|
| **CSR (Client-Side Rendering)** | `ssr: false` o `routeRules: { '/': { ssr: false } }` | `npm run dev` o `npm run build && npm run start` |  En el **navegador** del usuario (no en build ni en servidor) | Aquí para probar sí lo usamos, aunque solo sirve los bundles JS. En producción no es necesario, subir el `/dist` a un servidor estático | El navegador descarga el JS y renderiza todo en cliente (SPA). El HTML inicial está vacío. |
| **SSR (Server-Side Rendering)** | *(por defecto)*<br>(sin `ssr:false`, sin `prerender`) | `npm run dev` o `npm run build && npm run start` |  En **cada petición**, generado por el servidor Node | Sí (Node o Edge) | El servidor renderiza HTML bajo demanda y luego el cliente hidrata. Ideal para contenido dinámico o personalizado. |
| **SSG (Static-Site Generation)** | `nitro: { prerender: { routes: ['/'] } }`<br>o `routeRules: { '/': { prerender: true } }` | `npm run generate && npm run preview` |  En el **build** (antes del despliegue) | No, se sirven archivos estáticos (CDN o host estático) | El HTML se genera durante el build y se sirve directamente. Ideal para contenido estático y SEO. |


### Endpoints
- `GET /api/movies` — lista (cache 1h).
- `GET /api/movies/:id` — detalle (cache 1h).

