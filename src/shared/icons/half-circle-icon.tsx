import { Icon, type IconProps } from './icon';

/**
 * Иконка "полукруг" (половина окружности заполнена): ◐
 */
export const HalfCircleIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3 A9 9 0 0 1 12 21 Z" fill="currentColor" />
  </Icon>
);
