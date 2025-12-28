# Firebase Setup Guide for Wedding RSVP

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter your project name (e.g., "Wedding RSVP")
4. Uncheck "Enable Google Analytics" (optional)
5. Click "Create project"
6. Wait for the project to be created and click "Continue"

## Step 2: Create a Web App

1. In the Firebase Console, click the "</>" icon to add a web app
2. Enter your app nickname (e.g., "Wedding RSVP Web")
3. Check "Also set up Firebase Hosting" (optional)
4. Click "Register app"
5. Copy your Firebase configuration

## Step 3: Get Your Firebase Credentials

After registering the app, you'll see your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
};
```

## Step 4: Set Up Firestore Database

1. In the Firebase Console, go to **Build** > **Firestore Database**
2. Click "Create database"
3. Choose your location (closest to your users)
4. Select **Start in test mode** for development
5. Click "Create"

**Note:** Test mode allows anyone with the database URL to read/write. For production, update security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvps/{document=**} {
      allow create: if request.auth != null;
      allow read, update, delete: if false;
    }
  }
}
```

## Step 5: Configure Environment Variables

1. Open `.env` file in your project
2. Replace the placeholders with your Firebase credentials:

```
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

## Step 6: Install Dependencies

```bash
npm install
```

## Step 7: Run the Development Server

```bash
npm run dev
```

Your wedding RSVP site will be available at `http://localhost:5173`

## Features

✅ Beautiful wedding-themed UI with light/dark mode
✅ RSVP form with name and attendance selection
✅ Real-time data saving to Firestore
✅ Success message after submission
✅ Form validation
✅ Responsive design for all devices
✅ Smooth animations and transitions

## Database Schema

Your RSVP data is stored in Firestore under the `rsvps` collection:

```
Collection: rsvps
  - guestName (string): Guest's full name
  - attendance (boolean): true = attending, false = not attending
  - createdAt (timestamp): When the RSVP was submitted
```

## Viewing Your RSVPs in Firestore

1. Go to Firebase Console
2. Navigate to Firestore Database
3. Click on the "rsvps" collection
4. You'll see all submitted RSVPs with guest names and attendance status

## Customize Your Wedding Details

Edit `src/components/Footer.tsx` to update:
- Wedding date
- Wedding time
- Location address
- Couple names

Edit `src/App.tsx` to customize:
- Main heading text
- Subtitle text

## Troubleshooting

**Issue: "Missing or insufficient permissions"**
- Make sure Firestore is in test mode or update security rules

**Issue: "Firebase not initialized"**
- Check that all environment variables are correctly set in `.env`
- Restart the development server after changing `.env`

**Issue: Form not submitting**
- Open browser console (F12) and check for errors
- Verify Firebase project ID is correct
- Check that Firestore collection permissions allow writes

## Production Deployment

Before deploying to production:

1. Update Firestore security rules (see Step 4 above)
2. Get your production domain and add it to Firebase Console
3. Set up authentication if you want to restrict RSVP submissions
4. Use Firebase Hosting or deploy to your preferred hosting service

Good luck with your wedding celebration!
