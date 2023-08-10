import { JSXElement, Show } from 'solid-js';
import styles from './style.module.css';

type Props = {
  title: string;
  message: string;
  onClick: () => void;
  slots?: {
    icon?: JSXElement;
  };
};

export function Card(props: Props) {
  return (
    <div class={styles.container} onClick={props.onClick}>
      <Show when={props?.slots?.icon}>
        <div class={styles.iconContainer}>{props.slots.icon}</div>
      </Show>
      <h1 class={styles.title}>{props.title}</h1>
      <p class={styles.message}>{props.message}</p>
    </div>
  );
}
