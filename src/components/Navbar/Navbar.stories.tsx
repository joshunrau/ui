import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

type Story = StoryObj<typeof Navbar>;

export default { component: Navbar } satisfies Meta<typeof Navbar>;

export const Default: Story = {
  args: {
    items: [
      {
        href: '#',
        kind: 'a',
        label: 'Link 1'
      },
      {
        href: '#',
        kind: 'a',
        label: 'Link 2'
      },
      {
        kind: 'button',
        label: 'Link 3',
        onClick: () => alert('You clicked the button')
      }
    ],
    logo: <img alt="placeholder" src="https://placehold.co/400" />,
    title: 'Joshua Unrau'
  }
};
