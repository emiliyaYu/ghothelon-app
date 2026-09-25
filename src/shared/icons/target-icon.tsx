import { Icon, type IconProps } from './icon';

/**
 * Иконка "мишень" (концентрические окружности): ◎
 */
export const TargetIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
  </Icon>
);
