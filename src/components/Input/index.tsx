import React, { ChangeEvent, useState } from 'react';

type InputProps = JSX.IntrinsicElements['input'] & {
  label: string;
};

function Input(props: InputProps) {
  const { label, ...rest } = props;
  const [text, setText] = useState('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const restInputField = () => {
    setText('');
  };

  return (
    <>
      {/* <label htmlFor={props.id}>{label}</label> */}
      <input {...rest} type='text' value={text} onChange={onInputChange} aria-label={label} />
      <button onClick={restInputField}>Reset</button>
    </>
  );
}

export default Input;
