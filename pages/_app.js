import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import '../styles/globals.css';



const App = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-0752553643301255" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3007525536431255"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-894-883-3497'); // Replace with your Google Ads tracking ID
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
      <div style={{ display: 'block', width: '100%', height: 'auto' }}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3007525536431255"
          data-ad-slot="YOUR_AD_SLOT_ID" // Replace with your actual ad slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}
        />
      </div>
    </>
  );
};

export default App;
