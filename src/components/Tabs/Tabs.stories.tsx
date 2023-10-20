import type { Meta, StoryObj } from '@storybook/react';

import { type Tab, Tabs } from './Tabs';

type Story = StoryObj<typeof Tabs>;

export default { component: Tabs } satisfies Meta<typeof Tabs>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const tabs: Tab[] = [
        { isActive: false, label: 'My Account', onClick: () => null },
        { isActive: false, label: 'Company', onClick: () => null },
        { isActive: true, label: 'Team Members', onClick: () => null },
        { isActive: false, label: 'Billing', onClick: () => null }
      ];
      return <Story args={{ tabs }} />;
    }
  ]
};
