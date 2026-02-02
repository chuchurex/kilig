# Kilig Coffee - Tienda Online

Tienda e-commerce de Kilig Coffee, tostadores de cafe de especialidad en Santiago de Chile. Construida con el motor Kalkux.

## Powered by Kalkux

Este sitio usa el motor [Kalkux](https://github.com/chuchurex/kalkux) para renderizar toda la tienda desde archivos JSON. El motor vive en un repositorio separado y sera distribuido como servicio.

### Como se conectan

```
kilig.chuchurex.cl (este repo)     kalkux.com (repo kalkux)
├── index.html                      ├── js/kalkux.js (motor)
├── css/style.css                   ├── css/style.css (estilos base)
├── js/kalkux.js  <─── copia ───    └── API (futuro)
└── data/
    ├── config.json  (datos Kilig)
    ├── theme.json   (tema Kilig)
    └── products.json (productos Kilig)
```

**Modo actual**: Local — el motor (`js/kalkux.js`) esta copiado en este repo y lee desde `data/*.json`.

**Modo futuro**: API — el motor se cargara desde CDN de Kalkux y leera datos desde la API:

```html
<script src="https://cdn.kalkux.com/v1/kalkux.js"
        data-kx-api="https://api.kalkux.com/v1"
        data-kx-store="kilig"></script>
```

### Identificadores

- **Store ID**: `kilig`
- **Plataforma**: Kalkux (https://github.com/chuchurex/kalkux)
- **Data attributes**: `data-kx-api`, `data-kx-store`
- **CSS class**: `kx-loaded`
- **HTML id prefix**: `kx-`

## Estructura

```
├── index.html              # Shell HTML (~50 lineas)
├── css/style.css           # Estilos (tema inyectado por el motor)
├── js/kalkux.js            # Motor Kalkux (copia local)
└── data/
    ├── config.json         # Info tienda, navegacion, secciones, contacto
    ├── theme.json          # Colores, fuentes, espaciado
    └── products.json       # Productos, variantes, precios
```

## Datos de Kilig

### config.json
- Nombre: Kilig Coffee
- Moneda: CLP (peso chileno)
- Idioma: es
- Secciones: hero, about, cafe (6 productos), accesorios (12 productos), galeria, contacto
- Contacto: 2 locales en Santiago, WhatsApp, email
- Pago: Snipcart + MercadoPago

### products.json
- 18 productos (6 cafes con variantes, 12 accesorios simples)
- Variantes: peso (250g, 500g, 1kg, 5kg) y molienda (9 opciones)
- Precios en CLP

### theme.json
- Paleta: marrones (#2C1810, #8B5A2B, #D4A574)
- Fuente heading: Playfair Display
- Fuente body: system

## Deploy

Cloudflare Pages — `kilig.chuchurex.cl`
GitHub: https://github.com/chuchurex/kilig

## Stack

- HTML + CSS + JavaScript vanilla (motor Kalkux)
- Snipcart (carrito + checkout + MercadoPago)
- Cloudflare Pages (hosting, $0)
