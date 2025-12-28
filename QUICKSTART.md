# Quick Start Guide - Wedding RSVP

Get your wedding RSVP site live in 5 minutes!

## 1. Create Firebase Project (2 minutes)

1. Visit [firebase.google.com](https://firebase.google.com)
2. Click "Get Started" > "Add project"
3. Enter project name, uncheck Analytics
4. Click "Create project"
5. Click "</>" to create a Web app
6. Copy your Firebase config

## 2. Set Up Firestore (1 minute)

1. Go to **Build** > **Firestore Database**
2. Click "Create database"
3. Select **Test mode**
4. Choose a location
5. Click "Create"

## 3. Update Environment Variables (1 minute)

Replace placeholders in `.env`:

```
VITE_FIREBASE_API_KEY=YOUR_VALUE
VITE_FIREBASE_AUTH_DOMAIN=YOUR_VALUE
VITE_FIREBASE_PROJECT_ID=YOUR_VALUE
VITE_FIREBASE_STORAGE_BUCKET=YOUR_VALUE
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_VALUE
VITE_FIREBASE_APP_ID=YOUR_VALUE
```

## 4. Run Locally (1 minute)

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173`

## 5. Customize (Optional)

- **Wedding date/time**: Edit `src/components/Footer.tsx`
- **Couple names**: Edit `src/components/Footer.tsx`
- **Main heading**: Edit `src/App.tsx`
- **Colors**: Change Tailwind classes in components

## What You Get

✅ Beautiful responsive wedding RSVP form
✅ Light/dark mode toggle
✅ Real-time data saving to Firebase
✅ Success animation after submission
✅ Form validation
✅ Mobile-friendly design
✅ Production-ready code

## View Your RSVPs

1. Open Firebase Console
2. Go to **Firestore Database**
3. Click **rsvps** collection
4. See all guest responses!

## Deploy to Production

### Option A: Firebase Hosting (Easiest)

```bash
npm install -g firebase-tools
firebase login
firebase init
npm run build
firebase deploy
```

### Option B: Netlify

```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

### Option C: Vercel

```bash
npm install -g vercel
vercel
```

## Need Help?

- See `FIREBASE_SETUP.md` for detailed Firebase instructions
- See `README.md` for full documentation
- Check browser console (F12) for error messages

Congratulations on your wedding! 💕
