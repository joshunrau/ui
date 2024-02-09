import React from 'react';

import type { CarouselApi, CarouselProps, CarouselRef } from '@/components/Carousel';

type CarouselContextProps = CarouselProps & {
  api: CarouselApi;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: CarouselRef;
  scrollNext: () => void;
  scrollPrev: () => void;
};

export const CarouselContext = React.createContext<CarouselContextProps | null>(null);
