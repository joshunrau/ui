import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import { Form } from './Form';

type Story = StoryObj<typeof Form>;

export default { component: Form } satisfies Meta<typeof Form>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Form.Text label="Text" name="text" />
        <Button label="Submit" type="button" />
      </>
    )
  }
};
