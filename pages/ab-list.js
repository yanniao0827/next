import { useEffect, useState } from "react";
import { AB_LIST } from "@/config/api-path";
import Layout1 from "@/components/layouts/layout1";

export default function AbList() {
  const [data, setData] = useState({
    success: false,
    rows: []
  });
  useEffect( ()=>{
    fetch(`${AB_LIST}?page=2`)
    .then((r)=>r.json())
    .then((myData)=>{
      console.log(data);
      setData(myData);
    })

  }, []);

  return (
    <Layout1 title="通訊錄列表" pageName="ab-list">
      <div className="row">
        <div className="col">
        <table className="table table-bordered table-striped ">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>電郵</th>
                <th>手機</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r, i) => {
                return <tr key={r.sid}>
                  <td>{r.sid}</td>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td>{r.mobile}</td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout1>
  );
}
