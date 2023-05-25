import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="BlockMart, a decentralized marketplace."
          />
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
