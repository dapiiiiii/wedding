import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <header className="bg-white/80 dark:bg-gray-950/80 border-b border-rose-100/30 dark:border-rose-900/20 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">💍</div>
          <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-300 dark:to-pink-300 bg-clip-text text-transparent">
            Kal & Abel
          </h1>
        </div>

        <button
          onClick={onThemeToggle}
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/70 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-rose-100/30 dark:border-rose-900/20 hover:shadow-md"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>
    </header>
  );
}
