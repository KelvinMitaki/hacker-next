import Document, { Head, Main, NextScript } from "next/document";

export class myDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <link rel="manifest" href="/manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="HN" />
          <meta name="apple-mobile-web-app-title" content="HN" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />

          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="512x512"
            href="/icons/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="192x192"
            href="/icons/icon-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default myDocument;
