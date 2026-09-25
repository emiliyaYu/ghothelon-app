import type { Story, StoryDefault } from '@ladle/react';
import { ArticleCard, type ArticleCardProps } from './article-card';

export default {
  title: 'shared/ui/ArticleCard',
} satisfies StoryDefault;

export const Row: Story = () => (
  <div
    style={{
      display: 'flex',
      gap: 16,
      maxWidth: 1200,
    }}
  >
    <ArticleCard
      tag="Дракон"
      title="Вэлор Алый"
      subtitle="Владыка Пепла"
      description="Старейший из живых драконов, чьё пламя превратило Долину Кет в стекло три столетия назад."
      href="#"
    />
    <ArticleCard
      tag="Королевство"
      title="Королевство Аэрион"
      subtitle="Серебряный Предел"
      description="Северное королевство древних договоров, управляемое Заветом Пяти Домов со времён Основания."
      href="#"
    />
    <ArticleCard
      tag="Персонаж"
      title="Королева Фессали"
      subtitle="Неусыпная"
      description="Четырнадцатая правительница Аэриона, по слухам заключившая сделку с Ткачами Бледной Нити."
      href="#"
    />
  </div>
);

export const Playground: Story<
  Pick<ArticleCardProps, 'tag' | 'title' | 'subtitle' | 'description' | 'linkLabel'>
> = ({ tag, title, subtitle, description, linkLabel }) => (
  <div style={{ maxWidth: 340 }}>
    <ArticleCard
      tag={tag}
      title={title}
      subtitle={subtitle}
      description={description}
      linkLabel={linkLabel}
      href="#"
    />
  </div>
);

Playground.args = {
  tag: 'Дракон',
  title: 'Вэлор Алый',
  subtitle: 'Владыка Пепла',
  description:
    'Старейший из живых драконов, чьё пламя превратило Долину Кет в стекло три столетия назад.',
  linkLabel: 'Читать статью',
};

export const WithoutSubtitle: Story = () => (
  <div style={{ maxWidth: 340 }}>
    <ArticleCard
      tag="Событие"
      title="Падение Долины Кет"
      description="Три столетия назад пламя Вэлора Алого превратило цветущую долину в поле оплавленного стекла."
      href="#"
    />
  </div>
);
