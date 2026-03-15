import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Manikanta Juttu - Full Stack & Blockchain Developer',
  description: 'Portfolio website of Manikanta Juttu | Full Stack Developer | Blockchain Developer | Solana | Rust | Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-text antialiased">{children}</body>
    </html>
  );
}

