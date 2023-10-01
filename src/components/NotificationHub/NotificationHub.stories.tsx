import type { Meta, StoryObj } from '@storybook/react';

import { useNotificationStore } from '@/stores/notification-store';

import { Button } from '..';
import { NotificationHub } from './NotificationHub';

type Story = StoryObj<typeof NotificationHub>;

const meta: Meta<typeof NotificationHub> = {
  component: NotificationHub,
  decorators: [
    (Story) => {
      const notifications = useNotificationStore();
      return (
        <div className="border">
          <Story />
          <Button
            label="Add Notification"
            onClick={() => {
              notifications.addNotification({
                message: `Notification ${notifications.notifications.length}`,
                type: 'info'
              });
            }}
            type="button"
          />
        </div>
      );
    }
  ]
};

export default meta;

export const Default: Story = {
  args: {
    timeout: 100000
  }
};
