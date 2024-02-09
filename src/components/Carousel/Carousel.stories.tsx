import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';
import { Carousel } from './Carousel';

type Story = StoryObj<typeof Carousel>;

export default { component: Carousel } as Meta<typeof Carousel>;

export const Single: Story = {
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

export const Multiple: Story = {
  args: {
    children: (
      <>
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item className="md:basis-1/2 lg:basis-1/3" key={index}>
              <div className="p-1">
                <Card>
                  <Card.Content className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
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
    className: 'w-full max-w-sm',
    opts: {
      align: 'start'
    }
  }
};

export const Vertical: Story = {
  args: {
    children: (
      <>
        <Carousel.Content className="-mt-1 h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item className="pt-1 md:basis-1/2" key={index}>
              <div className="p-1">
                <Card>
                  <Card.Content className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
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
    className: 'w-full max-w-xs mt-12',
    opts: {
      align: 'start'
    },
    orientation: 'vertical'
  }
};
