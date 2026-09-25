import type { Story, StoryDefault } from '@ladle/react';
import { ReadMoreLink, type ReadMoreLinkProps } from './read-more-link';

export default {
  title: 'shared/ui/ReadMoreLink',
} satisfies StoryDefault;

export const Sizes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <ReadMoreLink href="#" size="s" />
    <ReadMoreLink href="#" size="m" />
  </div>
);

export const Playground: Story<Pick<ReadMoreLinkProps, 'size'> & { label: string }> = ({
  size,
  label,
}) => (
  <ReadMoreLink href="#" size={size}>
    {label}
  </ReadMoreLink>
);

Playground.args = {
  size: 'm',
  label: 'Читать статью',
};

Playground.argTypes = {
  size: {
    options: ['s', 'm'],
    control: { type: 'radio' },
  },
};
