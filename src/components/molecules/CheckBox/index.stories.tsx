'use client';
import { Meta, StoryObj } from '@storybook/react';
import CheckBox from './index';

const meta = {
  title: 'Molecules/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '표시 라벨',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: '체크',
      table: {
        type: { summary: 'number' },
      },
    },
    onChange: {
      description: '값이 변화했을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof CheckBox>;
export default meta;
type Story = StoryObj<typeof CheckBox>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: Story = {
  render: (args) => <CheckBox {...args} />,
};

export const WithLabel: Story = {
  args: {
    label: 'CheckBox Text',
  },
};
