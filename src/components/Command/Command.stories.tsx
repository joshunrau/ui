import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Command } from './Command';

type Story = StoryObj<typeof Command>;

export default { component: Command } as Meta<typeof Command>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </>
    )
  }
};
