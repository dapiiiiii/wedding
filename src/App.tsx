import { useState, useEffect } from 'react';
import Header from './components/Header';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import AdminScanner from './pages/AdminScanner';

function App() {
  // 🔀 ADMIN SCANNER ROUTE (NO UI CHANGE)
  if (window.location.pathname === '/admin') {
    return <AdminScanner />;
  }

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/40 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
        <Header isDark={isDark} onThemeToggle={handleThemeToggle} />

        <main>
          <section className="max-w-5xl mx-auto px-4 py-24">
            <div className="text-center mb-20 relative">
              <div className="inline-block mb-8 text-6xl animate-float">✨</div>
              <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 dark:from-rose-300 dark:via-pink-300 dark:to-rose-300 bg-clip-text text-transparent">
                  Kal & Abel
                </span>
              </h1>
              <p className="text-3xl text-rose-500 dark:text-rose-300 font-light tracking-wide mb-4">
                are getting married
              </p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent dark:via-rose-500 mx-auto my-10 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join us for a celebration of love, laughter, and new beginnings
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mb-24 items-start">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800/80 rounded-3xl p-10 shadow-xl border border-rose-100/50 dark:border-rose-900/30">
                  <h2 className="text-4xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-300 dark:to-pink-300 bg-clip-text text-transparent mb-6">
                    Join Us
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                    We invite you to celebrate the beginning of our forever.
                  </p>

                  <div className="space-y-4 text-base">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">📅</span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          October 10, 2026
                        </span>
                        <br />
                        <span className="text-gray-600 dark:text-gray-400">
                          12:00 PM (LOCAL TIME ET)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-3xl">📍</span>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ELIANA HOTEL
                        </span>
                        <br />
                        <span className="text-gray-600 dark:text-gray-400">
                          123 Chirchle Street, Piazza
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <RSVPForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
