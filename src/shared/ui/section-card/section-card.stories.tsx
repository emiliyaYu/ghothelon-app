import type { Story, StoryDefault } from '@ladle/react';
import { BullseyeIcon, DiamondIcon, HalfCircleIcon, TargetIcon } from '@/shared/icons';
import { SectionCard, type SectionCardProps } from './section-card';

export default {
  title: 'shared/ui/SectionCard',
} satisfies StoryDefault;

export const AllSections: Story = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 16,
      maxWidth: 1200,
    }}
  >
    <SectionCard title="Энциклопедия" description="4 200 статей" icon={<TargetIcon />} />
    <SectionCard title="Словарь" description="800 терминов" icon={<DiamondIcon />} />
    <SectionCard title="Хроники" description="312 событий" icon={<BullseyeIcon />} />
    <SectionCard title="Предания" description="94 документа" icon={<HalfCircleIcon />} />
  </div>
);

export const Playground: Story<
  Pick<SectionCardProps, 'title' | 'description' | 'disabled'> & { withIcon: boolean }
> = ({ title, description, disabled, withIcon }) => (
  <div style={{ maxWidth: 300 }}>
    <SectionCard
      title={title}
      description={description}
      disabled={disabled}
      icon={withIcon ? <TargetIcon /> : undefined}
    />
  </div>
);

Playground.args = {
  title: 'Энциклопедия',
  description: '4 200 статей',
  disabled: false,
  withIcon: true,
};
