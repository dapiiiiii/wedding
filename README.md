# Wedding RSVP Web Platform

A beautiful, modern wedding RSVP platform built with React, TypeScript, Tailwind CSS, and Firebase Firestore.

## Features

- **Elegant Design**: Premium, romantic wedding-themed interface
- **RSVP Form**: Simple and intuitive form for guests to confirm attendance
- **Dark Mode**: Toggle between light and dark themes
- **Real-time Data**: Responses stored instantly in Firebase Firestore
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Beautiful transitions and success animations
- **Form Validation**: Client-side validation with error messages

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Database**: Firebase Firestore
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Header with theme toggle
│   ├── RSVPForm.tsx     # Main RSVP form component
│   └── Footer.tsx       # Footer with wedding details
├── firebase.ts          # Firebase configuration
├── App.tsx              # Main app component
├── main.tsx             # React entry point
└── index.css            # Global styles and animations
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Firebase

Follow the detailed guide in `FIREBASE_SETUP.md`

### 3. Configure Environment Variables

Create or update your `.env` file with Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser

### 5. Build for Production

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

## Customization

### Update Wedding Details

Edit `src/components/Footer.tsx`:
- Wedding date
- Wedding time
- Location
- Couple names

Edit `src/App.tsx`:
- Main heading
- Subtitle

### Customize Colors

The theme uses rose/pink tones. Modify Tailwind classes in component files to use different colors.

### Update Form Labels

Edit `src/components/RSVPForm.tsx` to customize field names and button text.

## Database

All RSVPs are stored in Firebase Firestore under the `rsvps` collection with the following schema:

```typescript
{
  guestName: string;      // Guest's full name
  attendance: boolean;    // true = attending, false = not attending
  createdAt: Timestamp;   // Submission timestamp
}
```

## Security

For test/development:
- Firestore is configured in test mode
- Anyone can read/write data

For production:
- Update Firestore security rules
- Implement authentication if needed
- See `FIREBASE_SETUP.md` for production recommendations

## Deployment

### Firebase Hosting (Recommended)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init`
3. Deploy: `firebase deploy`

### Other Platforms

The project is a standard React app that can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS Amplify
- Any static hosting service

Build the project with `npm run build` and deploy the `dist/` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - Feel free to use for your wedding!

## Support

For Firebase setup help, see `FIREBASE_SETUP.md`

Good luck with your wedding celebration!
