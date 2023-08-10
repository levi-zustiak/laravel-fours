import { icons } from 'lucide-solid';
import { mergeProps, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import styles from './style.module.css';

export type IconProps = {
  name: keyof typeof icons;
  key?: string | number;
  color?: 'primary' | 'secondary';
  size?: string | number;
  strokeWidth?: string | number;
  class?: string;
  absoluteStokeWidth?: boolean;
};

export function Icon(props: IconProps) {
  const [local, rest] = splitProps(props, ['name']);
  const merged = mergeProps(
    {
      color: 'primary',
    },
    rest,
  );

  return (
    <Dynamic
      component={icons[local.name]}
      class={styles[merged.color]}
      {...rest}
    />
  );
}
