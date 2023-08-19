import { Link, usePage } from 'inertia-solid';
import { createEffect, JSXElement } from 'solid-js';
import styles from './style.module.css';
import { Motion } from '@motionone/solid';

export function NavItem(props: { href: string; children: JSXElement }) {
  const url = () => usePage().url;

  createEffect(() => console.log(props.href, url() === props.href));

  return (
    <Motion.div
      animate={{
        backgroundColor:
          url() === props.href ? 'var(--secondary-light)' : 'initial',
      }}
      hover={{ backgroundColor: 'var(--secondary-light)' }}
      style={{
        'border-radius': '8px',
        padding: '8px',
      }}
    >
      <Link href={props.href} class={styles.link} preserveState>
        {props.children}
      </Link>
    </Motion.div>
  );
}
