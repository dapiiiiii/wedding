import { useState, useRef } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { CheckCircle2, HeartCrack, Download } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

export default function RSVPForm() {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no' | ''>('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [rsvpId, setRsvpId] = useState<string | null>(null);

  const qrRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!guestName.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!attendance) {
      setError('Please select your attendance');
      return;
    }

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, 'rsvps'), {
        guestName: guestName.trim(),
        attendance: attendance === 'yes',
        createdAt: Timestamp.now(),
        checkedIn: false,
      });

      setRsvpId(docRef.id);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to submit RSVP. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (!qrRef.current) return;

    const url = qrRef.current.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = `Wedding-RSVP-${guestName || 'Guest'}.png`;
    link.click();
  };

  return (
    <div className="w-full">
      {submitted && rsvpId ? (
        attendance === 'yes' ? (
          /* ✅ YES RESPONSE */
          <div className="text-center bg-white dark:bg-gray-800/80 rounded-3xl p-12 border shadow-xl space-y-6">
            <CheckCircle2 className="w-20 h-20 text-rose-500 mx-auto" />

            <h2 className="text-4xl font-serif font-bold text-rose-600">
              Thank You 💖
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">
              We’re so excited to celebrate our special day with you.
              Please save your QR code and present it at the wedding entrance.
            </p>

            <div className="flex justify-center my-6">
              <QRCodeCanvas
                // THIS LINE FIXES THE FAST SCANNING: 
                // It creates a link that the phone camera recognizes instantly.
                value={`${window.location.origin}/admin?id=${rsvpId}`}
                size={220}
                level={"H"} // High error correction makes it scan faster/better
                ref={qrRef}
              />
            </div>

            <button
              onClick={downloadQRCode}
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <Download size={18} />
              Download QR Code
            </button>

            <p className="text-sm text-gray-500 italic">
              With love, Kal & Abel 💍
            </p>
          </div>
        ) : (
          /* ❌ NO RESPONSE */
          <div className="text-center bg-white dark:bg-gray-800/80 rounded-3xl p-12 border shadow-xl space-y-6">
            <HeartCrack className="w-20 h-20 text-gray-400 mx-auto" />

            <h2 className="text-4xl font-serif font-bold text-gray-600">
              We’ll Miss You 😢
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">
              We’re sorry you won’t be able to join us, but we truly appreciate
              your response and send you lots of love 💗
            </p>

            <p className="text-sm text-gray-500 italic">
              With love, Kal & Abel 💍
            </p>
          </div>
        )
      ) : (
        /* 📝 FORM */
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800/80 rounded-3xl border p-10 space-y-6 shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-rose-600 mb-2">
              RSVP
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Please let us know if you'll be joining us
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-600 text-sm font-medium">
                {error}
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-gray-200">
              Full Name
            </label>

            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter your full name"
              className="
                w-full px-5 py-3 rounded-xl border-2
                bg-white text-gray-900 placeholder-gray-400
                dark:bg-gray-900 dark:text-white dark:placeholder-gray-500
                border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-rose-400
              "
            />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setAttendance('yes')}
              className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                attendance === 'yes'
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              ✓ Yes, I'll be there!
            </button>

            <button
              type="button"
              onClick={() => setAttendance('no')}
              className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                attendance === 'no'
                  ? 'bg-gray-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              ✗ Sorry, can't make it
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </form>
      )}
    </div>
  );
}