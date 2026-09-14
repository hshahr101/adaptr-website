import type { Metadata } from 'next';
import { Inter, Outfit, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'ADAPTR Inc. | Accelerate Electrification',
  description: 'Patented Multi-Port Power Conversion Systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${outfit.variable} ${roboto.variable}`}
    >
      <body className="font-sans bg-lightcyan/30 dark:bg-gunmetal text-gunmetal dark:text-lightcyan antialiased min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}