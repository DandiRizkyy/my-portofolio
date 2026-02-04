# RPG Fantasy Portfolio

Website portofolio interaktif dengan tema RPG Fantasy yang terinspirasi dari Final Fantasy. Menampilkan intro screen dengan kristal interaktif yang membuka homepage portofolio.

## ✨ Fitur

- **Intro Screen Cinematic**: Kristal yang bisa diklik dengan animasi partikel dan efek glow
- **Design RPG Fantasy**: Tema dark fantasy dengan font Cinzel dan Cormorant Garamond
- **Animasi Smooth**: Transisi halus dan micro-interactions yang immersive
- **Fully Responsive**: Optimal di semua device
- **Clean Code**: Struktur component yang rapi dan maintainable

## 🚀 Tech Stack

- **React 18** - Library UI modern
- **Vite** - Build tool super cepat
- **Lucide React** - Icon library yang elegant
- **CSS Custom Properties** - Theming yang fleksibel

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy ke Vercel

### Cara 1: Via Vercel Dashboard (Recommended)

1. Push code ke GitHub repository
2. Buka [Vercel Dashboard](https://vercel.com/dashboard)
3. Klik "Add New Project"
4. Import repository GitHub kamu
5. Vercel akan otomatis detect settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik "Deploy"

### Cara 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit variabel CSS di `src/index.css`:

```css
:root {
  --primary: #d4af37;        /* Gold */
  --secondary: #8b5cf6;      /* Purple */
  --accent: #3b82f6;         /* Blue */
  /* ... tambah warna lainnya */
}
```

### Mengganti Font

Ganti import di bagian atas `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Modifikasi Konten

Edit konten di `src/App.jsx`:
- Hero section: Ubah title, description
- About section: Tulis cerita kamu
- Skills: Tambah/kurangi skill cards
- Projects: Tambah project kamu
- Contact: Update email dan social links

## 📁 Struktur Project

```
rpg-fantasy-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Fitur UI/UX

- **Intro Screen**: Kristal interaktif dengan animasi partikel floating
- **Smooth Transitions**: Setiap section punya entrance animation
- **Hover Effects**: Card dan button punya feedback visual yang jelas
- **Gradient Orbs**: Background dinamis dengan floating orbs
- **Responsive Navigation**: Sticky navbar dengan backdrop blur
- **Dark Theme**: Palette warna yang nyaman di mata

## 💡 Tips Pengembangan

1. **Tambah Sections**: Copy paste section-container dan modifikasi
2. **Custom Animations**: Gunakan @keyframes di CSS
3. **State Management**: Untuk data kompleks, consider Zustand/Redux
4. **Backend Integration**: Sambungkan form contact ke API
5. **Analytics**: Tambahkan Google Analytics atau Vercel Analytics

## 📝 License

MIT License - Feel free to use untuk portfolio pribadi!

## 🤝 Contributing

Pull requests are welcome! Untuk perubahan besar, open issue dulu untuk diskusi.

---

**Happy Coding!** ⚔️✨
