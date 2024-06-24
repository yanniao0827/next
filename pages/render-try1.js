import ChildA from '@/components/common/child-a';
import React,{useRef,useState} from 'react'

export default function RenderTry1() {
    const [count,setCount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>點點</button>
      <ChildA />
    </div>
  )
}
