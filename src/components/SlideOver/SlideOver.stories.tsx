import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { SlideOver } from './SlideOver';
import { Button } from '..';

type Story = StoryObj<typeof SlideOver>;

export default {
  component: SlideOver,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <div>
          <Button
            label="Open"
            type="button"
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <Story args={{ isOpen, setIsOpen }} />
        </div>
      );
    }
  ]
} satisfies Meta<typeof SlideOver>;

export const Default: Story = {};
