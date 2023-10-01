import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import { SlideOver } from './SlideOver';

type Story = StoryObj<typeof SlideOver>;

const meta: Meta<typeof SlideOver> = {
  component: SlideOver,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <div>
          <Button
            label="Open"
            onClick={() => {
              setIsOpen(true);
            }}
            type="button"
          />
          <Story args={{ isOpen, setIsOpen }} />
        </div>
      );
    }
  ]
};

export default meta;

export const Default: Story = {};
