import Box from '@/components/layout/Box';
import Flex from '@/components/layout/Flex';
import Grid from '@/components/layout/Grid';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';
import ShapeImage from '@/components/atoms/ShapeImage';
import Input from '@/components/atoms/Input';

export default function Home() {
  return (
    <>
      <Box $marginTop={{ base: 1, md: 2 }}>
        <Flex $justifyContent='space-between' $padding='0 10px' $paddingBottom='20px'>
          <Text $color='red'>124124</Text>
          <Input>2</Input>
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
