'use client';
import { Grid, Flex, Box } from '@/components/layout';
import { TextArea, Input, ShapeImage, Button, Text, Badge } from '@/components/atoms';
import { TextAreaEventType } from '@/components/atoms/TextArea';

export default function Home() {
  const handleTextChange = (e: TextAreaEventType) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Box $marginTop={{ base: 1, md: 2 }}>
        <Flex $justifyContent='space-between' $padding='0 10px' $paddingBottom='20px'>
          <Text $color='red'>124124</Text>
          <Input />
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

        <ShapeImage src='/images/clothes.jpg' alt='옷' width={300} height={200} shape='circle' />
        <ShapeImage src='/images/clothes.jpg' alt='옷' width={300} height={200} shape='square' />

        <TextArea rows={5} minRows={5} onChange={handleTextChange} />
        <Badge
          content='뱃지'
          $backgroundColor='yellowGreen'
          $padding='20px 20px'
          $fontSize='18px'
        />
        <Button
          $marginTop='20px'
          $backgroundColor='rgb(245,191,65)'
          $color='#fff'
          $fontWeight='bold'
          $borderRadius='60px'
          $pseudoClass={{
            $hover: { $backgroundColor: 'red' },
          }}
        >
          테스트 버튼
        </Button>
      </Box>
    </>
  );
}
