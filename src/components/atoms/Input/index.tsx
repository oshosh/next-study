'use client';
import styled, { css } from 'styled-components';
import { Responsive } from '@/types';
import { Color, FontSize, LetterSpacing, LineHeight, Space, toPropValue } from '@/utils/styles';

interface CustomInput {
  $hasError?: boolean;
  $hasBorder?: boolean;
}

export type InputProps = JSX.IntrinsicElements['input'] &
  CustomInput & {
    label?: string;
    $fontSize?: Responsive<FontSize>;
    $fontWeight?: Responsive<string>;
    $letterSpacing?: Responsive<LetterSpacing>;
    $lineHeight?: Responsive<LineHeight>;
    $textAlign?: Responsive<string>;
    $color?: Responsive<Color>;
    $backgroundColor?: Responsive<Color>;
    $height?: Responsive<string>;
    $minWidth?: Responsive<string>;
    $minHeight?: Responsive<string>;
    $display?: Responsive<string>;
    $border?: Responsive<string>;
    $overflow?: Responsive<string>;
    $margin?: Responsive<Space>;
    $marginTop?: Responsive<Space>;
    $marginRight?: Responsive<Space>;
    $marginBottom?: Responsive<Space>;
    $marginLeft?: Responsive<Space>;
    $padding?: Responsive<Space>;
    $paddingTop?: Responsive<Space>;
    $paddingRight?: Responsive<Space>;
    $paddingBottom?: Responsive<Space>;
    $paddingLeft?: Responsive<Space>;
  };

const Input = styled.input<InputProps>`
  color: ${({ theme }) => theme.colors.inputText};
  ${({ theme, $hasBorder, $hasError }) => {
    if ($hasBorder) {
      return css`
        border: 1px solid ${$hasError ? theme.colors.danger : theme.colors.border};
        border-radius: 5px;
      `;
    } else {
      return css`
        border: none;
      `;
    }
  }}

  ${(props) => toPropValue('font-size', props.$fontSize, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.$letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.$lineHeight, props.theme)}
  ${(props) => toPropValue('color', props.$color, props.theme)}
  ${(props) => toPropValue('background-color', props.$backgroundColor, props.theme)}
  ${(props) => toPropValue('height', props.$height, props.theme)}
  ${(props) => toPropValue('min-width', props.$minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.$minHeight, props.theme)}
  ${(props) => toPropValue('display', props.$display, props.theme)}
  ${(props) => toPropValue('border', props.$border, props.theme)}
  ${(props) => toPropValue('overflow', props.$overflow, props.theme)}
  ${(props) => toPropValue('margin', props.$margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.$marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.$marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.$marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.$marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.$padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.$paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.$paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.$paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.$paddingRight, props.theme)}
  
  box-sizing: border-box;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

Input.defaultProps = {
  $hasBorder: true,
  $padding: '11px 12px 12px 9px',
  $height: '38px',
  $fontSize: '16px',
  $lineHeight: '19px',
};

export default Input;
