'use client';
import styled from 'styled-components';
import { ImageProps } from 'next/image';
import { UnoptimizedImage } from '../Image';

type ImageShape = 'circle' | 'square';
type ShapeImageProps = ImageProps & { shape?: ImageShape };

export const ImageWithShape = styled(UnoptimizedImage)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`;

const ShapeImage = (props: ShapeImageProps) => {
  const { shape = 'square', ...imageProps } = props;

  return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;
