import { Motion, Presence } from '@motionone/solid';
import styles from './style.module.css';
import { createSignal, Show } from 'solid-js';

export function InitialTransition() {
  const [animated, setAnimated] = createSignal(false);

  return (
    <div class={styles.container}>
      <Motion.div
        initial={{ width: '100vw', left: 0 }}
        animate={{ width: 0 }}
        transition={{ delay: 1.25, duration: 1.5, easing: [0.87, 0, 0.13, 1] }}
        class={styles.wipe}
      >
        <Presence>
          <Show when={!animated()}>
            <Motion.h1
              animate={{ opacity: [1, 0], x: -96 }}
              transition={{
                delay: 0.75,
                duration: 1,
                easing: [0.76, 0, 0.24, 1],
              }}
              onMotionComplete={() => setAnimated(true)}
              class={styles.text}
            >
              FOURS
            </Motion.h1>
          </Show>
        </Presence>
      </Motion.div>
    </div>
  );
}
