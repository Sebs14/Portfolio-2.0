import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sebastian Flores Portfolio',
  description: 'Created to show my projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
