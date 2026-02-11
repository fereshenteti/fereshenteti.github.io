import "./styles/app.scss";
import './styles/stats-section.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Script from "next/script"

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
    <html lang="en">
      <Script type="text/javascript" id="hs-script-loader" async defer src="https://www.instagram.com/embed.js" />
      <Script type="text/javascript" id="hs-script-loader" async defer src="https://www.tiktok.com/embed.js" />

      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
