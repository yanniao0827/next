import { useEffect, useState } from "react";
import { AB_LIST } from "@/config/api-path";
import Layout1 from "@/components/layouts/layout1";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AbList() {
  const router=useRouter();
  // const [loading, setLoading] = useState(false);
  // const [loadingError, setLoadingError] = useState('');
  const [data, setData] = useState({
    success: false,
    rows: []
  });

  useEffect(() => {
    // setLoading(true);
    fetch(`${AB_LIST}?${new URLSearchParams(router.query)}`)
      .then((r) => r.json())
      .then((myData) => {
        console.log(data);
        setData(myData);
        // setLoading(false);
      })
      .catch((ex) => {
        // setLoadingError('載入資料時發生錯誤');
        // setLoading(false);
      });
  }, [router]);

  console.log(`ab-list render--------`);

  if(! router.isReady||!data.success) return null;


  return (
    <Layout1 title="通訊錄列表" pageName="ab-list">
    <div className="row">
        <div className="col">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {Array(11)
                .fill(1)
                .map((v, i) => {
                  const p = data.page - 5 + i;
                  if(isNaN(p))return null;
                  if (p < 1 || p > data.totalPages) return null;
                  return (
                    <li className={data.page === p?`page-item active`:`page-item`} key={p}>
                      <Link className="page-link" href={`?page=${p}`}>
                        {p}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </div>
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
