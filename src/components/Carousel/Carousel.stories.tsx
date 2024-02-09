import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';
import { Carousel } from './Carousel';

type Story = StoryObj<typeof Carousel>;

export default { component: Carousel } as Meta<typeof Carousel>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item key={index}>
              <div className="p-1">
                <Card>
                  <Card.Content className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </>
    ),
    className: 'w-full max-w-xs'
  }
};
