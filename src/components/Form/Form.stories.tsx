import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';

type Story = StoryObj<typeof Form>;

export default { component: Form } satisfies Meta<typeof Form>;

export const Default: Story = {};
