import React from "react";
import Layout1 from "@/components/layouts/layout1";
import Head from "next/head";
import { products } from "@/data/products";
import { useAuth } from "@/contexts/auth-context";

export default function Quick() {
  const{login,logout,auth}=useAuth();

  return (
    <Layout1 title="首頁" pageName="home">
    <div>用戶：{auth.nickname}</div>
    <hr />
    <div><button className="btn btn-dark" onClick={()=>{
        login("lea@mail.com","123")
    }}>lea@mail.com        
    </button>
    </div>
    <hr />
    <div><button className="btn btn-dark" onClick={()=>{
        login("ming@gg.com","123")
    }}>ming@gg.com        
    </button>
    </div>
    <hr />
    <div>
        <button
          className="btn btn-danger"
          onClick={() => {
            logout();
          }}
        >
          登出
        </button>
      </div>
    </Layout1>
  );
}
