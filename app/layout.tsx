import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "AllOnce — One Backend",
  description:
    "You run the prompt and we run the full business for you all at once. Production-grade backend for builders — spawn, orchestrate, and evolve a whole company in minutes.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Pre-built CSS bundles — kept in /public/css so all url(/fonts/…) refs resolve at runtime */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style-0.css" />
        <link rel="stylesheet" href="/css/theme-light.css" />
        <link rel="stylesheet" href="/css/ig-mix.css" />
        <link rel="stylesheet" href="/css/workflow.css" />
        <link rel="stylesheet" href="/css/accent.css" />
        <link rel="stylesheet" href="/css/signin.css" />
        <link rel="stylesheet" href="/css/pages.css" />
        {/* Analytics / tracker stubs so legacy data scripts don't error */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!window.dataLayer)window.dataLayer=[];if(!window.gtag)window.gtag=function(){};if(!window.ga)window.ga=function(){};if(!window.fbq)window.fbq=function(){};if(!window._satellite)window._satellite={track:function(){},getVar:function(){},setVar:function(){}};if(!window.optimizely)window.optimizely={push:function(){}};if(!window.__tcfapi)window.__tcfapi=function(){}}catch(e){}`,
          }}
        />
      </head>
      <body className="inter_c15e96cb-module__0bjUvq__className antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
