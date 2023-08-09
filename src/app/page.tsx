'use client';
import Counter from '@/components/Counter';
import Image from 'next/image';
import os from 'os'; // 노드 api
import Button from '@/components/Button';
import Text from '@/components/Text';
import { styled } from 'styled-components';
// import { useState } from 'react';

export default function Home() {
  console.log('안녕!');
  console.log(os.hostname());

  // const [name, setName] = useState('');

  return (
    <>
      <Button $color='blue' $backgroundColor='red'>
        <Text>버튼 텍스트</Text>
      </Button>

      <h1>홈페이지다!! 버전4</h1>
      <Counter />
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        width={400}
        height={400}
        alt='shop'
      ></Image>
    </>
  );
}
