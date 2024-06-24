import React,{useEffect} from 'react'

export default function LifeA() {
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


    return <div>LifeA</div>;
}
