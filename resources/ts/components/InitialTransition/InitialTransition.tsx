import { Motion, Presence } from '@motionone/solid';
import styles from './style.module.css';
import {createEffect, createRenderEffect, createSignal, Show} from 'solid-js';

export function InitialTransition() {
  const [animated, setAnimated] = createSignal(false);

  return (
      <Motion.div
        animate={{ width: 0 }}
        transition={{ delay: 1.25, duration: 1.5, easing: [0.87, 0, 0.13, 1] }}
        class={styles.container}
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
              connected={() => console.log('connected')}
            >
              FOURS
            </Motion.h1>
          </Show>
        </Presence>
      </Motion.div>
  );
}
