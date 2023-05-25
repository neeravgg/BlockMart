import React from "react";
import Head from "next/head";
import BuyCrypto from "../components/BuyCrypto";

export default function Transak() {
  return (
    <>
      <Head>
        <title>BlockMart- Buy Crypto </title>
        <meta
          name="description"
          content="BlockMart, buy any crypto via the Transak tool"
        />
      </Head>
      <BuyCrypto />
    </>
  );
}
