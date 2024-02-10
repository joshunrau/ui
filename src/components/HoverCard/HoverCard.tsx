import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { HoverCardContent } from './HoverCardContent';

export const HoverCard = Object.assign(HoverCardPrimitive.Root, {
  Content: HoverCardContent,
  Trigger: HoverCardPrimitive.Trigger
});
