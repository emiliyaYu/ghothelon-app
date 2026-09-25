import type { Story, StoryDefault } from '@ladle/react';
import { Tag, type TagProps } from './tag';

export default {
  title: 'shared/ui/Tag',
} satisfies StoryDefault;

export const States: Story = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <Tag>Обычный</Tag>
    <Tag active>Активный</Tag>
    <Tag href="/tags/history">Ссылка</Tag>
  </div>
);

export const Playground: Story<Pick<TagProps, 'active'> & { label: string; href: string }> = ({
  active,
  label,
  href,
}) => (
  <Tag href={href || undefined} active={active}>
    {label}
  </Tag>
);

Playground.args = {
  active: false,
  label: 'История',
  href: '',
};

Playground.argTypes = {
  active: {
    control: { type: 'boolean' },
  },
};
