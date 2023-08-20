'use client';
import { Meta, StoryObj } from '@storybook/react';
import { ShapeImage, ImageWithShape } from '@/components/atoms/ShapeImage';

const meta = {
  title: 'Atoms/ShapeImage',
  component: ImageWithShape,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '이미지 형태',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '세로폭',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} satisfies Meta<typeof ImageWithShape>;

export default meta;
type Story = StoryObj<typeof ImageWithShape>;

// https://storybook.js.org/docs/react/api/csf#default-render-functions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: Story = {
  render: (args) => <ShapeImage {...args} />,
};

export const Circle: Story = {
  args: {
    src: 'images/clothes.jpg',
    shape: 'circle',
    width: 300,
    height: 200,
    alt: '옷',
  },
};

export const Square: Story = {
  args: {
    src: 'images/jeans.jpg',
    shape: 'square',
    width: 300,
    height: 200,
    alt: '옷',
  },
};
