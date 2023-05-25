import NextDocument, { Html, Head, Main, NextScript } from "next/document";

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
        <script src="//code.tidio.co/zpidy7bujlddcr3qtjvqs5djijuu5mzs.js" async></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
