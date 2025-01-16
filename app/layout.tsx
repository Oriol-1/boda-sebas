import { Analytics } from "@vercel/analytics/react"
import './globals.css';
import type { Metadata } from 'next';
import { Great_Vibes } from 'next/font/google';
import Head from 'next/head';

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Boda de Militza & Sebastian',
  description: 'Te invitamos a celebrar nuestra boda',
  icons: {
    icon: '/icon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body className={`${greatVibes.variable} font-sans`}>{children}</body>
      <Analytics />
    </html>
  );
}