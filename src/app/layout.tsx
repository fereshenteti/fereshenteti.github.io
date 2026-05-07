import "./styles/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Script from "next/script";
import Providers from './components/Providers';
import ThemeToggle from './components/ThemeToggle';
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://fereshenteti.vercel.app'),
  title: "Fares Hentati – UI/UX Designer & Frontend Engineer",
  description: "UI/UX designer and frontend engineer crafting intuitive digital experiences. Available for freelance projects in design and development.",
  openGraph: {
    title: "Fares Hentati – UI/UX Designer & Frontend Engineer",
    description: "UI/UX designer and frontend engineer crafting intuitive digital experiences. Available for freelance projects in design and development.",
    url: "https://fereshenteti.vercel.app",
    siteName: "Fares Hentati",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fares Hentati – UI/UX Designer & Frontend Engineer",
    description: "UI/UX designer and frontend engineer crafting intuitive digital experiences. Available for freelance projects in design and development.",
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
            <Analytics/>
            <ThemeToggle />
            {children}
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
