import { useState } from 'react';
import type { Story, StoryDefault } from '@ladle/react';
import { MobileMenuButton } from './mobile-menu-button';

export default {
  title: 'shared/ui/MobileMenuButton',
} satisfies StoryDefault;

export const Default: Story = () => {
  const [open, setOpen] = useState(false);

  return (
    <MobileMenuButton
      open={open}
      controls="mobile-navigation"
      onClick={() => setOpen((currentOpen) => !currentOpen)}
    />
  );
};
