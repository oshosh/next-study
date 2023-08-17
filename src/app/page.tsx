import os from 'os'; // 노드 api
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import Counter from '@/components/Counter';
import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Grid from '@/components/layout/Grid';
// import { useState } from 'react';

export default function Home() {
  console.log('안녕!');
  console.log(os.hostname());

  return (
    <>
      <Box $marginTop={{ base: 1, md: 2 }}>
        <Flex $justifyContent='space-between' $padding='0 10px' $paddingBottom='20px'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Flex>
        <Grid $border='1px solid red' $gridTemplateColumns='180px 180px 180px'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Grid>
        <Grid $border='1px solid blue' $gridGap='16px' $gridTemplateColumns='repeat(4, 1fr)'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </Grid>

        <Button
          $backgroundColor='rgb(245,191,65)'
          $color='#fff'
          $fontWeight='bold'
          $borderRadius='60px'
        >
          위험
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
