import Counter from '@/components/Counter';
import { Inter } from '@next/font/google';
import os from 'os' // 노드 api
// import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log('안녕!');
  console.log(os.hostname());
  
  // const [name, setName] = useState('');

  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
    </>
  )
}
