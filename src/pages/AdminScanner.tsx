import { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function AdminScanner() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  const handleScan = async (qrData: string) => {
    try {
      const guestId = qrData.replace("RSVP:", "").trim();
      const docRef = doc(db, "rsvps", guestId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const guest = docSnap.data();
        setMessage(`🎉 Welcome, ${guest.guestName || "Guest"}! Successfully recognized.`);
      } else {
        setMessage(`❌ No guest found with ID: ${guestId}`);
      }
    } catch (error: any) {
      console.error("Firebase Error:", error);
      setMessage(`⚠️ Database Error: ${error.message}`);
    }
  };

  const startScanner = () => {
    if (isScanning) return;
    const config = { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 };
    const scanner = new Html5QrcodeScanner("scanner", config, false);
    scanner.render((data) => handleScan(data), () => {});
    scannerRef.current = scanner;
    setIsScanning(true);
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(e => console.error("Cleanup error", e));
      }
    };
  }, []);

  // --- PASSWORD LOCK SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
        <div className="max-w-sm w-full bg-white p-8 rounded-3xl shadow-2xl text-center border border-rose-100">
          <div className="text-4xl mb-4">🔐</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Admin Access</h2>
          <p className="text-gray-500 mb-6 text-sm">Please enter the admin password</p>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-4 rounded-xl border border-rose-200 outline-none focus:ring-2 focus:ring-rose-500 text-center text-2xl tracking-widest"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value === "0102") setIsAuthenticated(true);
            }}
            autoFocus
          />
        </div>
      </div>
    );
  }

  // --- SCANNER SCREEN ---
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-rose-600 mb-6">Admin Guest Check-In</h1>
        <div id="scanner" className="overflow-hidden rounded-lg border-2 border-gray-100 bg-gray-50"></div>
        {message && (
          <div className={`mt-6 p-4 rounded-xl text-center font-medium ${
            message.includes("Welcome") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {message}
          </div>
        )}
        {!isScanning ? (
          <button onClick={startScanner} className="w-full mt-6 py-4 bg-rose-500 text-white font-bold rounded-xl shadow-lg hover:bg-rose-600 transition-all">
            Start Camera Scanner
          </button>
        ) : (
          <p className="text-center mt-4 text-gray-400 text-sm animate-pulse">Camera is active. Point at a QR code.</p>
        )}
      </div>
    </div>
  );
}