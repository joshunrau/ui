import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

type Story = StoryObj<typeof Navbar>;

export default { component: Navbar } satisfies Meta<typeof Navbar>;

export const Default: Story = {
  args: {
    title: 'Joshua Unrau',
    logo: <img alt="placeholder" src="https://placehold.co/400" />,
    items: [
      {
        kind: 'a',
        label: 'Link 1',
        href: '#'
      },
      {
        kind: 'a',
        label: 'Link 2',
        href: '#'
      },
      {
        kind: 'button',
        label: 'Link 3',
        onClick: () => alert('You clicked the button')
      }
    ]
  }
};
