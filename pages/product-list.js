import React from "react";
import Layout1 from "@/components/layouts/layout1";
import Head from "next/head";
import { products } from "@/data/products";

export default function ProductList() {
  return (
    <Layout1>
      <Head>
        <meta keyword="小新" />
      </Head>
      <h2>泥好</h2>
      <table class="table">
  <thead>
    <tr>
      <th >#</th>
      <th >商品名稱</th>
      <th >頁數</th>
      <th >價格</th>
      <th >加入購物車</th>
    </tr>
  </thead>
  <tbody>
    {
        products.map(p=>{
            return<tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.bookname}</td>
                <td>{p.pages}</td>
                <td>{p.price}</td>
                <td><button type="button" class="btn btn-dark">加入</button></td>
            </tr>
        })
    }
  </tbody>
</table>
    </Layout1>
  );
}
