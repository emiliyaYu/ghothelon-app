import type { Story, StoryDefault } from '@ladle/react';
import { Heading, type HeadingColor, type HeadingProps, type HeadingSize } from './heading';

export default {
  title: 'shared/ui/Heading',
} satisfies StoryDefault;

const sizes: HeadingSize[] = ['xs', 's', 'm', 'l', 'xl'];
const colors: HeadingColor[] = ['foreground', 'primary', 'accent', 'subtle'];

export const AllSizes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    {sizes.map((size) => (
      <Heading key={size} size={size}>
        Заголовок размера {size}
      </Heading>
    ))}
  </div>
);

export const Colors: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    {colors.map((color) => (
      <Heading key={color} size="m" color={color}>
        Цвет {color}
      </Heading>
    ))}
  </div>
);

export const Italic: Story = () => (
  <Heading size="m" italic>
    Курсивный заголовок
  </Heading>
);

export const Playground: Story<
  Pick<HeadingProps, 'size' | 'color' | 'italic'> & { text: string }
> = ({ size, color, italic, text }) => (
  <Heading size={size} color={color} italic={italic}>
    {text}
  </Heading>
);

Playground.args = {
  size: 'xl',
  color: 'subtle',
  italic: false,
  text: 'Гхотэлон',
};

Playground.argTypes = {
  size: {
    options: sizes,
    control: { type: 'radio' },
  },
  color: {
    options: colors,
    control: { type: 'radio' },
  },
};
