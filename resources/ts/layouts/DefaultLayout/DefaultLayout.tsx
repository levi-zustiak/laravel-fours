import { JSXElement } from 'solid-js';
import { Navigation } from '@components/Navigation';
import styles from './style.module.css';

export function DefaultLayout(props: { children: JSXElement }) {
  return (
    <div class={styles.container}>
      <Navigation />
      <main class={styles.main}>{props.children}</main>
    </div>
  );
}
