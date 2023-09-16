import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

export default {
  args: {
    children: 'Button'
  },
  component: Button
} satisfies Meta<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};
