// pages/_app.js
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

// components/Layout.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Layout({ children }) {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                Restaurante
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Início
              </Link>
              <Link href="/menu" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Menu
              </Link>
              <Link href="/reservas" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Reservas
              </Link>
              <Link href="/contato" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Contato
              </Link>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © 2024 Restaurante. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
