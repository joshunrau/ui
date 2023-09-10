import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.js';

type Story = StoryObj<typeof Button>;

export default {
  args: {
    children: 'Button'
  },
  component: Button
} satisfies Meta<typeof Button>;

export const Default: Story = {};
