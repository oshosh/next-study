import { Meta, StoryFn } from '@storybook/react';
import { StyledButton } from '@/components/StyledButton';
import { MouseEvent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta<typeof StyledButton>;

const incrementAction = action('increment');

type StoryStyledButton = StoryFn<typeof StyledButton>;

export const Primary: StoryStyledButton = (props) => {
  const [count, setCount] = useState(0);

  const increment = (event: MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => prev + 1);
    incrementAction(event, count);
  };

  return (
    <>
      {count}
      <StyledButton {...props} variant='primary' onClick={increment}>
        Primary
      </StyledButton>
      <StyledButton {...props} variant='primary' onClick={linkTo('StyledButton', 'Success')}>
        Success 이동
      </StyledButton>
    </>
  );
};

export const Success: StoryStyledButton = (props) => {
  return (
    <StyledButton {...props} variant='success' onClick={linkTo('StyledButton', 'Danger')}>
      Success
    </StyledButton>
  );
};

export const Danger: StoryStyledButton = (props) => {
  return (
    <StyledButton {...props} variant='danger' onClick={linkTo('StyledButton', 'Primary')}>
      Danger
    </StyledButton>
  );
};
