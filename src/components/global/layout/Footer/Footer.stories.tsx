import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Footer from './Footer';

const meta = {
  title: 'Modules/Global/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  },
};
