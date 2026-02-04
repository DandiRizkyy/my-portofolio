# 🚀 Panduan Deploy ke Vercel

## Persiapan

1. **Pastikan kamu punya akun GitHub**
   - Daftar di [github.com](https://github.com) jika belum punya

2. **Pastikan kamu punya akun Vercel**
   - Daftar di [vercel.com](https://vercel.com) menggunakan akun GitHub

## Langkah-Langkah Deploy

### Step 1: Upload ke GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: RPG Fantasy Portfolio"

# Create repository di GitHub dulu, lalu:
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy via Vercel Dashboard

1. **Login ke Vercel**
   - Buka [vercel.com/login](https://vercel.com/login)
   - Login dengan GitHub

2. **Import Project**
   - Klik "Add New" → "Project"
   - Pilih repository GitHub yang baru dibuat
   - Klik "Import"

3. **Configure Project**
   Vercel akan otomatis detect settings:
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Deploy**
   - Klik "Deploy"
   - Tunggu 1-2 menit
   - Done! Website kamu sudah live 🎉

### Step 3: Custom Domain (Opsional)

1. Di Vercel Dashboard project kamu, buka tab "Settings"
2. Pilih "Domains"
3. Tambahkan custom domain
4. Ikuti instruksi untuk update DNS

## Deploy Otomatis

Setiap kali kamu push ke GitHub, Vercel akan otomatis:
- Build ulang project
- Deploy versi terbaru
- Update live website

```bash
# Setelah edit code
git add .
git commit -m "Update: deskripsi perubahan"
git push

# Vercel akan auto-deploy!
```

## Tips Deployment

### Environment Variables (Jika Diperlukan)

Jika kamu pakai API keys atau secrets:

1. Di Vercel Dashboard → Settings → Environment Variables
2. Tambahkan variabel dengan format:
   ```
   Key: VITE_API_KEY
   Value: your-api-key-here
   ```
3. Redeploy project

### Build Optimization

File `vercel.json` sudah dikonfigurasi untuk:
- ✅ Single Page Application routing
- ✅ Optimized build output
- ✅ Static file caching

### Preview Deployments

Setiap branch yang di-push akan dapat preview URL:
- Main branch → Production URL
- Feature branches → Preview URLs
- Perfect untuk testing sebelum merge!

## Troubleshooting

### Build Failed?

Cek di Vercel build logs:
1. Buka deployment yang failed
2. Lihat "Build Logs" tab
3. Fix error yang muncul
4. Push lagi ke GitHub

### Common Issues:

**Error: Cannot find module**
```bash
# Pastikan semua dependencies terinstall
npm install
npm run build  # Test locally dulu
```

**404 on refresh**
- Sudah handled di `vercel.json` dengan rewrites

**Slow loading**
- Enable Vercel Analytics untuk monitoring
- Consider lazy loading untuk components besar

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Lazy load images
   - Add proper alt text

2. **Code Splitting**
   - Vite sudah handle ini otomatis
   - Tapi bisa optimize lebih dengan dynamic imports

3. **Caching**
   - Vercel Edge Network sudah optimal
   - Set proper cache headers jika perlu

## URLs Penting

- **Production**: `https://your-project.vercel.app`
- **Dashboard**: `https://vercel.com/dashboard`
- **Docs**: `https://vercel.com/docs`

## Next Steps

Setelah deploy:

1. ✅ Test di berbagai device
2. ✅ Setup custom domain
3. ✅ Enable Analytics
4. ✅ Share portfolio URL!

---

**Selamat!** Website portfolio RPG Fantasy kamu sudah online! ⚔️✨
