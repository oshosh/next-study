'use client';

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((number) => number + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>버튼 증가 시키기</button>
    </>
  )
}
