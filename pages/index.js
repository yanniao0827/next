import React from "react";
import Layout1 from "@/components/layouts/layout1";
import Head from "next/head";
import { products } from "@/data/products";

export default function Home() {
  
  return (
    <Layout1 title="首頁" pageName="home">
      <Head>
        <meta keyword="小新" />
      </Head>
      <h1>Home</h1>
    </Layout1>
  );
}
