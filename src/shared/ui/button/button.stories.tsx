import type { Story, StoryDefault } from '@ladle/react';
import { MapPinIcon } from '@/shared/ui/icon';
import { Button, type ButtonProps } from './button';

export default {
  title: 'shared/ui/Button',
} satisfies StoryDefault;

export const SideBySide: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 210 }}>
    <Button variant="light">Исследуй карту</Button>
    <Button variant="dark">Изучай энциклопедию</Button>
  </div>
);

export const Playground: Story<Pick<ButtonProps, 'variant' | 'disabled'> & { label: string }> = ({
  variant,
  disabled,
  label,
}) => (
  <Button variant={variant} disabled={disabled} icon={<MapPinIcon />}>
    {label}
  </Button>
);

Playground.args = {
  variant: 'light',
  disabled: false,
  label: 'Исследуй карту',
};

Playground.argTypes = {
  variant: {
    options: ['light', 'dark'],
    control: { type: 'radio' },
  },
};
