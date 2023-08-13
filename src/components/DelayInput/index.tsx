import React, { ChangeEvent, ChangeEventHandler, useCallback, useRef, useState } from 'react';

interface DelayButtonProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function DelayInput({ onChange }: DelayButtonProps) {
  // 입력 중 여부를 유지하는 상태
  const [isTyping, setIsTyping] = useState(false);
  // input에 표기하는 텍스트 유지하는 상태
  const [inputValue, setInputValue] = useState('');
  // span에 표시할 텍스트를 유지하는 상태
  const [viewValue, setViewValue] = useState('');

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsTyping(true);
      setInputValue(e.target.value);

      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        timerRef.current = null;

        setIsTyping(false);
        setViewValue(e.target.value);
        onChange(e);
      }, 1000);
    },
    [onChange]
  );

  const text = isTyping ? '입력 중...' : `입력한 텍스트123123: ${viewValue}`;

  return (
    <>
      <input data-testid='input-text' value={inputValue} onChange={handleChange} />
      <span data-testid='display-text'>{text}</span>
    </>
  );
}

export default DelayInput;
