import { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: '배지 테스트',
      table: {
        type: { summary: 'string' },
      },
    },
    $backgroundColor: {
      control: { type: 'color' },
      description: '배지 색상',
      table: {
        type: { summary: 'string' },
      },
    },
    $padding: {
      control: { type: 'color' },
      description: '배지 내부 간격',
      table: {
        type: { summary: 'string' },
      },
    },
    $fontSize: {
      control: { type: 'color' },
      description: '배지 폰트 사이즈',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof Badge>;

export const Orange: Story = {
  args: {
    content: 'orange',
    $backgroundColor: '#ed9f28',
    $padding: '20px 20px',
    $fontSize: '18px',
  },
};

export const Green: Story = {
  args: {
    content: 'green',
    $backgroundColor: '#32bf00',
    $padding: '20px 20px',
    $fontSize: '18px',
  },
};

export const Red: Story = {
  args: {
    content: 'red',
    $backgroundColor: '#d4001a',
    $padding: '20px 20px',
    $fontSize: '18px',
  },
};
