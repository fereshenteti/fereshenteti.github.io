import "./styles/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Script from "next/script"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script type="text/javascript" id="hs-script-loader" async defer src="https://www.instagram.com/embed.js"/>
      <Script type="text/javascript" id="hs-script-loader" async defer src="https://www.tiktok.com/embed.js"/>

      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
