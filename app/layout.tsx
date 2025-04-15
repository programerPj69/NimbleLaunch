import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { Toaster } from "sonner";
import { AuthProvider } from '../components/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NimbleLaunch - Modern Solutions for Modern Problems',
  description: 'Transform your workflow with NimbleLaunch. Boost productivity and streamline operations with our innovative SaaS platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
