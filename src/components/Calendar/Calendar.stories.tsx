import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

type Story = StoryObj<typeof Calendar>;

export default { component: Calendar } as Meta<typeof Calendar>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const [date, setDate] = useState<Date | undefined>(new Date());
      return (
        <Story
          args={{
            className: 'rounded-md border',
            mode: 'single',
            onSelect: setDate,
            selected: date
          }}
        />
      );
    }
  ]
};
