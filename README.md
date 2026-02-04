# RPG Fantasy Portfolio

Website portofolio interaktif dengan tema RPG Fantasy yang terinspirasi dari Final Fantasy dan Genshin Impact. Menampilkan intro screen dengan kristal interaktif yang membuka homepage portofolio.

## ✨ Fitur

- **Intro Screen Cinematic**: Kristal yang bisa diklik dengan efek glow
- **Design RPG Fantasy**: Tema dark fantasy dengan font Cinzel dan Cormorant Garamond
- **Animasi Smooth**: Transisi halus dan micro-interactions yang immersive
- **Fully Responsive**: Optimal di semua device
- **Clean Code**: Struktur component yang rapi dan maintainable

## 🚀 Tech Stack

- **React 18** - Library UI modern
- **Vite** - Build tool super cepat
- **Lucide React** - Icon library yang elegant
- **Lottie React** - Animasi library yang super keren
- **Typewriter Effect** - Library typing text
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

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit variabel CSS di `src/index.css`:

```css
:root {
  --primary: #d4af37; /* Gold */
  --secondary: #8b5cf6; /* Purple */
  --accent: #3b82f6; /* Blue */
  /* ... tambah warna lainnya */
}
```

### Mengganti Font

Ganti import di bagian atas `src/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont&display=swap");
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
my-portfolio/
├── public/
│   ├── vite.svg
    └── logo.png
├── src/
    ├── assets/ # Berisi file animasi lottie
        ├── Books.json
        ├── Industry.json
        ├── LovelyMeow.json
        ├── OnlinePayment.json
        ├── PaperPlane.json
│   ├── App.jsx          # Main component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Fitur UI/UX

- **Intro Screen**: Kristal interaktif
- **Smooth Transitions**: Setiap section punya entrance animation
- **Hover Effects**: Card dan button punya feedback visual yang jelas
- **Gradient Orbs**: Background dinamis dengan floating orbs
- **Responsive Navigation**: Sticky navbar dengan backdrop blur
- **Dark Theme**: Palette warna yang nyaman di mata

## 📝 License

MIT License - Feel free to use untuk portfolio pribadi!

---

**Happy Coding!** ⚔️✨
