import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

type Story = StoryObj<typeof Heading>;

export default { component: Heading } satisfies Meta<typeof Heading>;

export const Default: Story = {
  args: {
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae impedit deleniti alias voluptatum? Molestiae quia obcaecati amet minus, quibusdam fugit temporibus soluta eligendi nisi est voluptas dolorum vero repellendus.',
    title: 'Title'
  }
};
