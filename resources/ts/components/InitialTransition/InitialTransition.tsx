import { Motion } from '@motionone/solid';
import styles from './style.module.css';

export function InitialTransition() {
  console.log('transition');
  return (
    <div class={styles.container}>
      <Motion.div
        initial={{ height: '100vh', bottom: 0 }}
        animate={{ height: 0 }}
        transition={{ duration: 1.5, easing: [0.87, 0, 0.13, 1] }}
        class={styles.wipe}
      />
    </div>
  );
}
