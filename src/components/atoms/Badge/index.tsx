'use client';
import { Responsive } from '@/types';
import { Color, FontSize, LetterSpacing, LineHeight, Space, toPropValue } from '@/utils/styles';
import styled from 'styled-components';

type BadgeWrapperProps = {
  $backgroundColor?: Responsive<Color>;
  $width?: Responsive<string>;
  $height?: Responsive<string>;
  $minWidth?: Responsive<string>;
  $minHeight?: Responsive<string>;
  $display?: Responsive<string>;
  $border?: Responsive<string>;
  $borderRadius?: Responsive<string>;
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

type BadgeContentsProps = {
  $fontSize?: Responsive<FontSize>;
  $fontWeight?: Responsive<string>;
  $letterSpacing?: Responsive<LetterSpacing>;
  $lineHeight?: Responsive<LineHeight>;
  $textAlign?: Responsive<string>;
  $color?: Responsive<Color>;
};

// 배지 원형
const BadgeWrapper = styled.div<BadgeWrapperProps>`
  border-radius: 20px;
  height: 20px;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${(props) => toPropValue('background-color', props.$backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.$width, props.theme)}
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
  ${(props) => toPropValue('border-radius', props.$borderRadius, props.theme)}
`;

// 배지 내부 텍스트
const BadgeText = styled.p<BadgeContentsProps>`
  color: white;
  font-size: 11px;
  user-select: none;
  ${(props) => toPropValue('font-size', props.$fontSize, props.theme)}
  ${(props) => toPropValue('font-weight', props.$fontWeight, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.$letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.$lineHeight, props.theme)}
  ${(props) => toPropValue('text-Align', props.$textAlign, props.theme)}
  ${(props) => toPropValue('color', props.$color, props.theme)}
`;

interface BadgeProps extends BadgeWrapperProps, BadgeContentsProps {
  /**
   * 배지 내부 텍스트
   */
  content: string;
}

/**
 * 배지
 */
const Badge = ({ content, $backgroundColor, ...rest }: BadgeProps) => {
  return (
    <BadgeWrapper $backgroundColor={$backgroundColor} {...rest}>
      <BadgeText {...rest}>{content}</BadgeText>
    </BadgeWrapper>
  );
};

export default Badge;
