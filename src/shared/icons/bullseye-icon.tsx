import { Icon, type IconProps } from './icon';

/**
 * Иконка "яблочко" (кольцо с заполненным центром): ◉
 */
export const BullseyeIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" fill="currentColor" />
  </Icon>
);
