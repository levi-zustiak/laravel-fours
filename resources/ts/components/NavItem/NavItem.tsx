import { Link } from 'inertia-solid';
import { JSXElement } from 'solid-js';
import styles from './style.module.css';

export function NavItem(props: { href: string; children: JSXElement }) {
  return (
    <Link href={props.href} class={styles.link} preserveState>
      {props.children}
    </Link>
  );
}
