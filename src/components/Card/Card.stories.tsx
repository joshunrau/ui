import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = { component: Card };

export default meta;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="my-5 text-xl font-medium">Example</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum modi in ratione blanditiis maiores error, optio placeat, enim
          assumenda totam aliquid qui sapiente consectetur quasi expedita corporis illum veniam quibusdam?
        </p>
      </div>
    )
  }
};
