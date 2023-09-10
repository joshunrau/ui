import type { Meta, StoryObj } from '@storybook/react';

import { Example } from './Example.js';

const meta: Meta<typeof Example> = { component: Example };

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
