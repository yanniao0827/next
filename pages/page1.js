import React from 'react'

export default function page1() {
  return (
    <div>
    {/* 在這裡如果直接開會出現錯誤，不能在這裡使用DOM相關的API */}
      {location.href}
    </div>
  )
}
