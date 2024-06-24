import React,{useEffect,useState} from 'react'

export default function LifeA() {
    const [val,setVal]=useState(6);
    useEffect(()=>{
        let n = 0;
        console.log("已掛載");

        const interval_id=setInterval(()=>{
            n++;
            console.log({n});
        },1000)
        return()=>{
            console.log("卸載");
            clearInterval(interval_id);
        };
    },[]);

    useEffect(()=>{
        console.log("已更新");
        return()=>{
            console.log("即將更新");
        };
    },[val])


    return  <>
    <div>
      LifeA <button onClick={() => setVal(val + 1)}>加一</button>
    </div>
    <div>{val}</div>
  </>;
}
