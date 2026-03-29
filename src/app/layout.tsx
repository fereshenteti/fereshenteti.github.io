import "./styles/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Script from "next/script";
import Providers from './components/Providers';
import ThemeToggle from './components/ThemeToggle';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feres Henteti - Portfolio",
  description: "Portfolio of Feres Henteti, showcasing projects and designs.",
  openGraph: {
    title: "Feres Henteti - Portfolio",
    description: "Check out my latest projects and designs.",
    url: "https://fereshenteti.github.io",
    siteName: "Feres Henteti",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feres Henteti - Portfolio",
    description: "Check out my latest projects and designs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hide page until theme-init.js sets data-theme, preventing flash of wrong theme */}
        <style>{`html:not([data-theme]) { visibility: hidden; }`}</style>
      </head>
      <body>
        {/* Flash prevention: sets data-theme before React hydrates */}
        <Script src="/theme-init.js" strategy="beforeInteractive" id="theme-init" />
        <AppRouterCacheProvider>
          <Providers>
            <ThemeToggle />
            {children}
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
