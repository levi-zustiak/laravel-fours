import { JSXElement } from 'solid-js';
import styles from './style.module.css';
import { Notifications } from '@components/Notifications/Notifications';
import { Profile } from '@components/Profile';
import { SideNavigation } from '@components/SideNavigation';
import { InitialTransition } from '@components/InitialTransition';

export function DefaultLayout(props: { children: JSXElement }) {
  return (
    <div class={styles.container}>
      <InitialTransition />
      <SideNavigation />
      <div
        style={{
          position: 'fixed',
          top: '64px',
          right: '64px',
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Notifications />
        <Profile />
      </div>
      <main class={styles.main}>
        <div class={styles.content}>{props.children}</div>
      </main>
    </div>
  );
}
