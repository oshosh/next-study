'use client';
import os from 'os'; // 노드 api
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import DelayInput from '@/components/DelayInput';
import Text from '@/components/Text';
import Box from '@/components/layout/Box';
// import { useState } from 'react';

export default function Home() {
  console.log('안녕!');
  console.log(os.hostname());

  // const [name, setName] = useState('');
  const [text, setText] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <Box $marginTop={{ base: 1, md: 2 }}>
        <DelayInput onChange={onChange} />
        <div>{text}</div>
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
      </Box>
    </>
  );
}
