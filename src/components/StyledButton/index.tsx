'use client';
import { css, styled } from 'styled-components';

const variants = {
  primary: {
    color: '#fff',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  secondary: {
    color: '#fff',
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
  },
  success: {
    color: '#fff',
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  danger: {
    color: '#fff',
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
  },
  warning: {
    color: '#212529',
    backgroundColor: '#ffc107',
    borderColor: '#ffc107',
  },
  info: {
    color: '#fff',
    backgroundColor: '#17a2b8',
    borderColor: '#17a2b8',
  },
  light: {
    color: '#212529',
    backgroundColor: '#f8f9fa',
    borderColor: '#f8f9fa',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#343a40',
    borderColor: '#343a40',
  },
  link: {
    color: '#007bff',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
};

type StyledButtonProps = {
  variant: keyof typeof variants;
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => css`
    color: ${variants[variant].color};
    background-color: ${variants[variant].backgroundColor};
    border-color: ${variants[variant].borderColor};
  `}
  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
