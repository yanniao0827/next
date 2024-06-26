import { useEffect, useState } from "react";
import { AB_LIST } from "@/config/api-path";
import Layout1 from "@/components/layouts/layout1";
import Link from "next/link";
import { useRouter } from "next/router";
import { z } from "zod";
import { AB_ADD_POST } from "@/config/api-path";
export default function AbAdd() {
  const router = useRouter();
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
    // 做表單的驗證
    /*
    const schemaEmail = z.string().email({ message: "請填寫正確的電郵格式" });
    if (e.target.name === "email") {
      const result = schemaEmail.safeParse(e.target.value);
      console.log(JSON.stringify(result, null, 4));
    }
    */
    /*
    {
    "success": false,
    "error": {
        "issues": [
            {
                "validation": "regex",
                "code": "invalid_string",
                "message": "請填寫正確的手機格式",
                "path": [
                    "mobile"
                ]
            }
        ],
        "name": "ZodError"
      }
    }
    */
    const schemaForm = z.object({
      name: z.string().min(2, { message: "姓名至少兩個字" }),
      email: z.string().email({ message: "請填寫正確的電郵格式" }),
      mobile: z
        .string()
        .regex(/09\d{2}-?\d{3}-?\d{3}/, { message: "請填寫正確的手機格式" }),
    });
    const newForm = { ...myForm, [e.target.name]: e.target.value };
    const result2 = schemaForm.safeParse(newForm);
    console.log(JSON.stringify(result2, null, 4));
    // 重置 myFormErrors
    const newFormErrors = {
      name: "",
      email: "",
      mobile: "",
    };
    if (!result2.success && result2?.error?.issues?.length) {
      for (let issue of result2.error.issues) {
        newFormErrors[issue.path[0]] = issue.message;
      }
    }
    setMyFormErrors(newFormErrors);
    console.log(newForm);
    setMyForm(newForm);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // 如果表單驗證有通過的話
    try {
      const r = await fetch(AB_ADD_POST, {
        method: "POST",
        body: JSON.stringify(myForm),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await r.json();
      console.log(result);
      if (result.success) {
        router.push(`/ab-list`); // 跳頁
      } else {
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <Layout1 title="編輯通訊錄" pageName="ab-add">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">編輯資料</h5>
              <form name="form1" onSubmit={onSubmit}>
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
                  修改
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout1>
  );
}