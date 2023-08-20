'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface TextProps {
  $color?: string;
  $fontWeight?: string | number;
  children: ReactNode;
}

function Text({ $color, $fontWeight, children }: TextProps) {
  return (
    <TextStyle $color={$color} $fontWeight={$fontWeight}>
      {children}
    </TextStyle>
  );
}

export default Text;

const TextStyle = styled.p<TextProps>`
  color: ${({ $color }) => $color || 'blue'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 700};
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`;
