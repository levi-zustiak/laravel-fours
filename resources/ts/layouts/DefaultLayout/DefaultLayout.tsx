import { JSXElement } from 'solid-js';
import { Navigation } from '@components/Navigation';
import styles from './style.module.css';
import { Notifications } from '@components/Notifications/Notifications';
import { Profile } from '@components/Profile';
import { Presence } from '@motionone/solid';
import { router } from 'inertia-solid';

export function DefaultLayout(props: { children: JSXElement }) {
  router.on('before', (event) => console.log(event));
  return (
    <div class={styles.container}>
      <Navigation />
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
        <Presence exitBeforeEnter>
          <div class={styles.content}>{props.children}</div>
        </Presence>
      </main>
    </div>
  );
}
