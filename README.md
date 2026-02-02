# Kilig Coffee - Online Store

E-commerce site for Kilig Coffee, specialty coffee roasters based in Santiago, Chile. Built with the Kalkux engine and Sanity CMS.

## Powered by Kalkux

This site uses the [Kalkux](https://github.com/chuchurex/kalkux) engine to render the entire store from structured data. The engine supports three data source modes: local JSON, remote API, and Sanity CMS.

**Current mode**: Sanity — the engine fetches data from Sanity CDN via GROQ queries.

```html
<script src="js/kalkux.js"
        data-kx-store="kilig"
        data-kx-sanity-project="08b72xoc"
        data-kx-sanity-dataset="production"></script>
```

**Fallback mode**: Local — reads from `data/*.json` if Sanity attributes are removed.

## Architecture

```
kilig/
├── index.html              # HTML shell (~50 lines)
├── css/style.css           # Styles (theme injected by engine)
├── js/kalkux.js            # Kalkux engine v1.2 (local copy)
├── data/                   # Local JSON fallback
│   ├── config.json         # Store info, navigation, sections, contact
│   ├── theme.json          # Colors, fonts, spacing
│   └── products.json       # Products, variants, pricing
└── studio/                 # Sanity Studio
    ├── sanity.config.ts    # Studio config with custom structure
    ├── sanity.cli.ts       # CLI config (deploy target: kilig.sanity.studio)
    └── schemaTypes/        # Schema definitions
        ├── siteConfig.ts   # Store configuration (singleton)
        ├── siteTheme.ts    # Visual theme (singleton)
        ├── product.ts      # Products with variants and pricing
        └── variantType.ts  # Shared variant definitions
```

## Data Sources

### Sanity CMS (primary)
- **Project**: `08b72xoc`
- **Dataset**: `production` (public)
- **Studio**: https://kilig.sanity.studio
- **CDN**: `https://08b72xoc.apicdn.sanity.io`

### Static Assets
- **Images**: https://static.kiligcoffee.cl/img/
- **Hosting**: Hostinger via Cloudflare CDN
- **27 images** migrated from WordPress

### Local JSON (fallback)
- `data/config.json` — store info, navigation, hero, about, gallery, contact
- `data/products.json` — 18 products (6 coffees with variants, 12 accessories)
- `data/theme.json` — color palette, fonts, spacing, shadows

## Content Structure

### Products (18 total)
- **Coffee** (6): Colombia Antioquia, Brasil Carmo de Minas, Honduras Copan, Peru San Ignacio, Mexico Descafeinado, Colombia Chiroso
- **Accessories** (12): Aeropress models, V60 kit, French presses, paper filters

### Variants
- **Weight**: 250g, 500g, 1kg, 2kg
- **Grind**: 9 options (whole bean, espresso, aeropress, v60, chemex, kalita, moka pot, drip, french press)

### Pricing
- Coffee: by-variant (CLP $11,900 - $65,000 depending on weight)
- Accessories: fixed price (CLP $3,900 - $59,900)

## Identifiers

- **Store ID**: `kilig`
- **Engine**: Kalkux v1.2
- **Data attributes**: `data-kx-sanity-project`, `data-kx-sanity-dataset`, `data-kx-store`
- **CSS class**: `kx-loaded`
- **HTML id prefix**: `kx-`

## Local Development

```bash
# Serve the site
python3 -m http.server 4022 --bind 127.0.0.1

# Run Sanity Studio locally
cd studio && npm run dev
```

## Deploy

- **Site**: Cloudflare Pages — `kilig.chuchurex.cl`
- **Studio**: `kilig.sanity.studio` (deployed via `npx sanity deploy`)
- **Images**: `static.kiligcoffee.cl` (Hostinger + Cloudflare)

## Stack

- HTML + CSS + vanilla JavaScript (Kalkux engine)
- Sanity CMS (content management)
- Snipcart (cart + checkout + MercadoPago)
- Cloudflare (DNS, CDN, Pages hosting)
- Hostinger (static image hosting)
