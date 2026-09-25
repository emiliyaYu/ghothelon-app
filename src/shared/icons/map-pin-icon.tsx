import { Icon, type IconProps } from './icon';

export const MapPinIcon = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);
