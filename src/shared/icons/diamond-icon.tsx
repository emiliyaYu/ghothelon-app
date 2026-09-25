import { Icon, type IconProps } from './icon';

/**
 * Иконка "ромб" (концентрические ромбы): ◈
 */
export const DiamondIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 3 21 12 12 21 3 12z" />
    <path d="M12 7 17 12 12 17 7 12z" />
  </Icon>
);
