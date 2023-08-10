import styles from './style.module.css';
import { splitProps } from 'solid-js';

type Props = {
  children: any;
};

export function Button(props: Props) {
  const [local, rest] = splitProps(props, ['children']);
  return (
    <button {...rest} class={styles.button}>
      {local.children}
    </button>
  );
}
