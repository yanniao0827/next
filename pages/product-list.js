import React from "react";
import Layout1 from "@/components/layouts/layout1";
import Head from "next/head";
import { products } from "@/data/products";

export default function ProductList() {
    const addToCart = (pid) => {
        const cartKey = "shin-cart";
    
        const item = products.find((p) => p.id === pid);
        if(! item) return; // 沒找到項目就結束
        console.log({ pid, item });
    
        const oriData = localStorage.getItem(cartKey);
        let cartData = []; // 預設值
        try {
          cartData = JSON.parse(oriData);
          if (!Array.isArray(cartData)) {
            cartData = [];
          }
        } catch (ex) {}
    
        const cartItem = cartData.find((p) => p.id === pid); // 購物車裡有沒有這個商品
        if(cartItem) return; // 購物車裡已經有這個商品
        const {id, bookname, pages, price} = item;
        cartData.push({ id, bookname, pages, price, quantity: 1 });
    
        localStorage.setItem(cartKey, JSON.stringify(cartData));
      };
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
                <td><button type="button" class="btn btn-dark"  onClick={() => addToCart(p.id)}>加入</button></td>
            </tr>
        })
    }
  </tbody>
</table>
    </Layout1>
  );
}
