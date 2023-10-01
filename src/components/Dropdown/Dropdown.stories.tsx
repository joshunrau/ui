import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

type Story = StoryObj<typeof Dropdown>;

export default { component: Dropdown } satisfies Meta<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'My Dropdown',
    onSelection: (selection) => alert(`Selection: ${selection}`),
    options: ['Option 1', 'Option 2', 'Option 3']
  }
};
