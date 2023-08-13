import { RenderResult, render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  let renderResult: RenderResult;

  // 실행 전
  beforeEach(() => {
    renderResult = render(<Input id='username' label='Username' />);
  });

  // 실행 후
  afterEach(() => {
    renderResult.unmount();
  });

  it('화면이 비어 있는지 테스트', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    expect(inputNode).toHaveValue('');
  });

  it('문자를 입력했을때, 입력한 내용이 표시되는지 테스트', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;

    // input의 onChange event를 트리거
    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode).toHaveValue(inputText);
  });

  it('버튼이 클릭되면 입력 텍스트가 클리어하는지 체크', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: inputText } });

    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement;

    fireEvent.click(buttonNode);

    expect(inputNode).toHaveValue('');
  });
});
