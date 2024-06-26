import { useEffect, useState } from "react";
import { AB_LIST } from "@/config/api-path";
import Layout1 from "@/components/layouts/layout1";
import Link from "next/link";
import { useRouter } from "next/router";
import { z } from "zod";

export default function AbAdd() {
  const [myForm, setMyForm] = useState({
    name: "",
    email: "",
    mobile: "",
    birthday: "",
    address: "",
  });
  const [myFormErrors, setMyFormErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    const emailSchema=z.string().email({message:"郵件格式錯誤"});
    if(e.target.name==="email"){
      const result=emailSchema.safeParse(e.target.value);
      console.log(JSON.stringify(result,null,4));
    };
    const newForm = { ...myForm, [e.target.name]: e.target.value };
    const schemaForm=z.object({
      name:z.string().min(2,{message:"姓名格式錯誤，至少兩字"}),
      email:z.string().email({message:"郵件格式錯誤"}),
      mobile:z.string().regex(/09\d{2}-?\d{3}-?\d{3}/,{message:"手機格式錯誤"})
    });

    const result2=schemaForm.safeParse(newForm);
    console.log(JSON.stringify(result2,null,4));

    const newFormErrors={
      name: "",
      email: "",
      mobile: "",
    };

    if(!result2.success && result2?.error?.issues?.length){
      for(let issue of result2.error.issues){
        newFormErrors[issue.path[0]] = issue.message;
      }
    }

    
    console.log(newForm);
    setMyForm(newForm);
  };

  return (
    <Layout1 title="新增通訊錄" pageName="ab-add">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">新增資料</h5>
              <form name="form1">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={myForm.name}
                    onChange={onChange}
                  />
                  <div className="form-text">{myFormErrors.name}</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={myForm.email}
                    onChange={onChange}
                  />
                  <div className="form-text">{myFormErrors.email}</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    手機
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={myForm.mobile}
                    onChange={onChange}
                  />
                  <div className="form-text">{myFormErrors.mobile}</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="birthday" className="form-label">
                    生日
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    name="birthday"
                    value={myForm.birthday}
                    onChange={onChange}
                  />
                  <div className="form-text"></div>
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    地址
                  </label>

                  <textarea
                    className="form-control"
                    id="address"
                    name="address"
                    cols="30"
                    rows="3"
                    value={myForm.address}
                    onChange={onChange}
                  ></textarea>
                  <div className="form-text"></div>
                </div>

                <button type="submit" className="btn btn-primary">
                  新增
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
}