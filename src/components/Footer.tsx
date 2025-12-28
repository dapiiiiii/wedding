export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 border-t border-rose-900/20 text-white py-12 mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">📅</span>
            <div>
              <h3 className="font-serif text-lg font-bold mb-2 text-amber-100">Wedding Date</h3>
              <p className="text-gray-200">October 10, 2026</p>
              <p className="text-gray-400 text-sm">Ceremony: 12:00 PM (LOCAL TIME ET) | Reception: 11:00 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0">📍</span>
            <div>
              <h3 className="font-serif text-lg font-bold mb-2 text-amber-100">Venue</h3>
              <p className="text-gray-200">ELIANA HOTEL</p>
              <p className="text-gray-400 text-sm">123 Chirchle Street, Piassa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            With love and excitement, we invite you to celebrate this momentous occasion
          </p>
          <p className="text-center text-gray-500 text-xs mt-4">
            © 2026 Kal & Abel Wedding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
