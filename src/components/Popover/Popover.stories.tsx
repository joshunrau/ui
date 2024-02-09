import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { Popover } from './Popover';

type Story = StoryObj<typeof Popover>;

export default { component: Popover } as Meta<typeof Popover>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Popover.Trigger asChild>
          <Button variant="outline">Open popover</Button>
        </Popover.Trigger>
        <Popover.Content className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input className="col-span-2 h-8" defaultValue="100%" id="width" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input className="col-span-2 h-8" defaultValue="300px" id="maxWidth" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input className="col-span-2 h-8" defaultValue="25px" id="height" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input className="col-span-2 h-8" defaultValue="none" id="maxHeight" />
              </div>
            </div>
          </div>
        </Popover.Content>
      </>
    )
  }
};
