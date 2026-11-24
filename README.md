# Miracle Beauty & Hair Salon — Premium Demo Website

A modern, production-quality demonstration website built for **Miracle beauty & hair salon**, located in Patel Wadi, Parel, Mumbai.

**Google Maps Reference:** [Miracle beauty & hair salon](https://www.google.com/maps/search/?api=1&query=Miracle%20beauty%20%26%20hair%20salon&query_place_id=ChIJ7SKyH2nP5zsR5a3Mt2bsQDE)  
**Place ID:** `ChIJ7SKyH2nP5zsR5a3Mt2bsQDE`

---

## 🎨 Extracted Brand Colors & Design System

Colors were extracted directly from the salon's physical high-street storefront, L'Oréal Professionnel partnership identity, and interior ambiance:

| Role | Hex Code | Visual Source & Purpose |
|------|----------|-------------------------|
| **Primary** | `#4A154B` | Royal Mulberry Plum — Salon storefront fascia & primary branding |
| **Primary Hover** | `#631B64` | Rich vibrant plum for button hover interactions |
| **Primary Dark** | `#2F0A30` | Deep plum night shade — Header micro-bar & Footer |
| **Secondary (Accent)** | `#D4AF37` | Antique Champagne Gold — L'Oréal Professionnel partner emblem & star highlights |
| **Secondary Hover** | `#B89225` | Deep gold for button states |
| **Background** | `#FAF7F5` | Warm Alabaster Cream — Studio wall tone, clean and welcoming |
| **Background Alt** | `#F3ECE7` | Warm Sandstone — Alternating section contrast |
| **Surface** | `#FFFFFF` | Crisp White Cards and modal backdrops |
| **Text Primary** | `#1F1924` | Espresso Plum Charcoal — High contrast WCAG AAA readability |
| **Text Muted** | `#6B6168` | Warm Taupe — Subtitles and secondary descriptors |
| **Border** | `#E8DFD8` | Soft Linen — Elegant dividers and cards |

All colors are defined strictly in `src/styles/theme.css` via CSS variables (`--color-primary`, `--color-secondary`, etc.) and mapped into Tailwind CSS in `tailwind.config.js`.

---

## 🛠️ How to Customize

### 1. How to Edit Salon Data
All content is centralized in **`src/data/salonData.js`**:
- Business name, address, landmark, and phone numbers.
- Opening hours schedule.
- Services list, pricing, durations, categories, and inclusions.
- Curated packages and before/after transformation details.
- Real Google Maps customer reviews.
- Team specialties and roles.
- Frequently asked questions (FAQ).

### 2. How to Change Colors & Theme
Open **`src/styles/theme.css`** and adjust the CSS custom variables under `:root`:
```css
:root {
  --color-primary: #4A154B;
  --color-secondary: #D4AF37;
  --color-bg: #FAF7F5;
  ...
}
```
All Tailwind classes (`bg-primary`, `text-secondary`, `bg-bg`, `border-edge`) automatically update throughout the website.

### 3. How to Replace Sample Images with Real Photos
All image assets are stored locally in **`public/images/`**.
When the salon provides genuine high-resolution photos:
1. Copy the new image files into `public/images/`.
2. Update the corresponding `image` path in `src/data/salonData.js`.
3. Change `"sample": true` to `"sample": false`.

### 4. Demo Owner Credentials
- **Login URL:** `/owner/login`
- **Username:** `admin`
- **Password:** `miracle2024`
- Includes a 1-click **"Auto-fill Details"** button on the login screen for testing.
- Allows status switching (`Pending`, `Confirmed`, `Completed`, `Cancelled`) with instant `localStorage` persistence.

---

## 🚀 How to Build & Deploy

### Prerequisites
- Node.js (v18+) & npm

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
The output will be generated inside the `dist/` directory.

### Deploying to Vercel, Netlify, or GitHub Pages
- **Vercel:** `vercel.json` is included at the root with SPA rewrites to `/index.html`.
- **Netlify:** `public/_redirects` is included with `/* /index.html 200`.
- All routes (`/services`, `/location`, `/contact`, `/book`, `/owner/dashboard`) work seamlessly on page refresh.
