import React, { useEffect, useState } from "react";
import Layout1 from '@/components/layouts/layout1'

export default function Cart() {
    const cartKey = "shin-cart";
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const oriData = localStorage.getItem(cartKey);
        let cartData = []; // 預設值
        try {
          cartData = JSON.parse(oriData);
          if (!Array.isArray(cartData)) {
            cartData = [];
          }
        } catch (ex) {}
    
        setCart(cartData);
      }, []);
    
  return (
    <Layout1>
      <h2>購物車</h2>
      <table class="table">
  <thead>
    <tr>
      <th >商品編號</th>
      <th >商品名稱</th>
      <th >價格</th>
      <th >數量</th>
      <th >小計</th>
      <th>移除</th>
    </tr>
  </thead>
  <tbody>
    {
        cart.map(p=>{
            return<tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.bookname}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.quantity*p.price}</td>
                <td><button type="button" class="btn btn-danger"  onClick={() =>{} }>刪除商品</button></td>
            </tr>
        })
    }
  </tbody>
</table>
    </Layout1>
  )
}
