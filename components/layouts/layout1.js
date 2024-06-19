import React from "react";
import Navbar from "./navbar";
import Head from "next/head";
import Footer from "./footer";

export default function Layout1({ title = "活力啟點", children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
