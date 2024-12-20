import './globals.css';
import type { Metadata } from 'next';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Boda de Juan & María',
  description: 'Te invitamos a celebrar nuestra boda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${greatVibes.variable} font-sans`}>{children}</body>
    </html>
  );
}