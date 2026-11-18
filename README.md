# Kanguru Siaga Admin

Aplikasi Web Admin Kanguru Siaga berbasis **React 19**, **TypeScript**, **Vite**, dan **Firebase SDK**.

## Memulai Proyek

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Konfigurasi Environment
Salin `.env.example` menjadi `.env` lalu isi konfigurasi Firebase project Anda:
```bash
cp .env.example .env
```

Variabel yang digunakan:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

### 3. Menjalankan Server Development
```bash
npm run dev
```

### 4. Build untuk Produksi
```bash
npm run build
```

### 5. Linting
```bash
npm run lint
```

---

## Struktur Modul Firebase (`src/firebase/`)

- [`src/firebase/config.ts`](./src/firebase/config.ts): Inisialisasi Firebase App, Analytics, Auth, Firestore, dan Storage.
- [`src/firebase/index.ts`](./src/firebase/index.ts): Entry point untuk mengimpor instance Firebase pada komponen aplikasi:
  ```typescript
  import { app, analytics, auth, db, storage } from './firebase';
  ```
