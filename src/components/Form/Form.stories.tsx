import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './Form';
import { Button } from '..';

type Story = StoryObj<typeof Form>;

export default { component: Form } satisfies Meta<typeof Form>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Form.Text name="text" label="Text" />
        <Button label="Submit" type="button" />
      </>
    )
  }
};
