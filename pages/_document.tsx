import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <Script
          async
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2FDB7X0B4R"
        />

        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-2FDB7X0B4R');`,
          }}
        ></Script>
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
