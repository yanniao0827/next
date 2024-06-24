import React,{useEffect} from 'react'

export default function LifeA() {
    useEffect(()=>{
        console.log("已掛載");
        return()=>{
            console.log("卸載前");
        };
    });


    return <div>LifeA</div>;
}
