import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { SlideOver } from './SlideOver';

type Story = StoryObj<typeof SlideOver>;

export default {
  component: SlideOver,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(true);
      return <Story args={{ isOpen, setIsOpen }} />;
    }
  ]
} satisfies Meta<typeof SlideOver>;

export const Default: Story = {};
