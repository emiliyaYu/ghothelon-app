import type { Story, StoryDefault } from '@ladle/react';
import { GoldRule } from './gold-rule';

export default {
  title: 'shared/ui/GoldRule',
} satisfies StoryDefault;

export const Default: Story = () => (
  <div style={{ padding: 24 }}>
    <GoldRule />
  </div>
);

export const InContainers: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 24 }}>
    <div style={{ width: 640 }}>
      <GoldRule />
    </div>
    <div style={{ width: 320 }}>
      <GoldRule />
    </div>
    <div style={{ width: 160 }}>
      <GoldRule />
    </div>
  </div>
);
