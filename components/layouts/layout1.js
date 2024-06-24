import React from "react";
import Navbar from "./navbar";
import Head from "next/head";
import Footer from "./footer";

export default function Layout1({ children,title="",pageName="" }) {
  return (
    <>
      <Head>
        <title>{title ? title+ "| 活力啟點":"活力啟點"}</title>
      </Head>
      <Navbar {...{pageName}}/>
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
