import { Icon, type IconProps } from './icon';

/**
 * Иконка "стрелка вправо": →
 */
export const ArrowRightIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M5 12h14" strokeLinecap="round" />
    <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
);
