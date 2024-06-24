import { useRouter } from 'next/router'
import React from 'react'

export default function Slug3() {
    const router=useRouter();
  return (
    <pre>
      {JSON.stringify(router.query,null,4)}
    </pre>
  )
}
