'use client';
import styled from 'styled-components';
import React, { useCallback, useState } from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 최소 행 수
   */
  minRows?: number;
  /**
   * 최대 행 수
   */
  maxRows?: number;
  /**
   * 변형 에러 플래그
   */
  $hasError?: boolean;
}

type TextAreaErrorType = Exclude<TextAreaProps, '$hasError'>;

const StyledTextArea = styled.textarea<TextAreaErrorType>`
  color: ${({ theme }) => theme.colors.inputText};
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? theme.colors.danger : theme.colors.border)};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 9px 12px 10px 12px;
  resize: none;
  overflow: auto;
  height: auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export type TextAreaEventType = React.ChangeEvent<HTMLTextAreaElement>;
/**
 * 텍스트 영역
 */
const TextArea = (props: TextAreaProps) => {
  const { rows = 5, minRows = 5, maxRows = 10, children, $hasError, onChange, ...rest } = props;
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows));
  console.assert(!(rows < minRows), 'TextArea: 현재 rows 설정이 minRows 설정 보다 낮습니다.');

  const handleChange = useCallback(
    (e: TextAreaEventType) => {
      const textareaLineHeight = 24;
      const previousRows = e.target.rows;

      e.target.rows = minRows; // 행 수 초기화

      // 현재 행 수
      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight);

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      // 최대를 넘지 않도록 행 수 초기화
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows);

      // custom OnChange
      onChange && onChange(e);
    },
    [onChange, minRows, maxRows]
  );

  return (
    <StyledTextArea
      $hasError={$hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  );
};

export default TextArea;
