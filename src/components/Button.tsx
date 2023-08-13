'use client';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  $color?: string;
  $backgroundColor?: string;
  children: ReactNode;
}

function Button({ $color, $backgroundColor, children }: ButtonProps) {
  return (
    <ButtonStyle $color={$color} $backgroundColor={$backgroundColor}>
      {children}
    </ButtonStyle>
  );
}

export default Button;

const ButtonStyle = styled.button<ButtonProps>`
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: 2px solid ${({ $color }) => $color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`;
