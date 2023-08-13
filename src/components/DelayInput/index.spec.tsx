import { RenderResult, act, fireEvent, render, screen } from '@testing-library/react';
import DelayInput from './index';

describe('DelayInput', () => {
  let renderResult: RenderResult;
  let handleChange: jest.Mock;

  beforeEach(() => {
    // jest 목 함수
    handleChange = jest.fn();
    renderResult = render(<DelayInput onChange={handleChange} />);
    // 타이머 콜백 효과
    jest.useFakeTimers();
  });

  afterEach(() => {
    renderResult.unmount();
    // 원래 타이머 돌림
    jest.useFakeTimers();
  });

  it('span 요소의 텍스트가 비어있는지 testCall', () => {
    const spanNode = screen.getByTestId('display-text');

    expect(spanNode).toHaveTextContent('입력한 텍스트123123:');
  });

  it('입력하는 동시에 입력중... 이라고 표시 되는지 테스트', () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text');
    const spanNode = screen.getByTestId('display-text');

    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(spanNode).toHaveTextContent('입력 중...');
  });

  it('입력 후 1초 뒤 텍스트 표시되는지 테스트', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text');
    const spanNode = screen.getByTestId('display-text');

    fireEvent.change(inputNode, { target: { value: inputText } });

    // timer call 호출을 전부 보장함
    await act(() => {
      jest.runAllTimers(); // 모든 timer 함수 바로 실행
    });

    expect(spanNode).toHaveTextContent(`입력한 텍스트123123: ${inputText}`);
  });

  it('입력 후 1초 뒤에 onChange가 호출 되는지 테스트', async () => {
    const inputText = 'Test Input Text';
    const inputNode = screen.getByTestId('input-text');

    fireEvent.change(inputNode, { target: { value: inputText } });

    await act(() => {
      jest.runAllTimers();
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
