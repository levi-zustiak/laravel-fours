import styles from './style.module.css';
import { Motion, Presence } from '@motionone/solid';
import { Show } from 'solid-js';

const textAnimations = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      delay: 0,
    },
  },
  transition: {
    easing: [0.6, -0.05, 0.01, 0.99],
    delay: 0.1,
  },
};

export function Logo(props: { show: boolean }) {
  return (
    <div class={styles.container}>
      <div class={styles.logo}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="36" r="12" fill="#FFDC97" />
          <circle
            cx="12"
            cy="36"
            r="7.84615"
            stroke="#FFD179"
            stroke-width="2.30769"
          />
          <circle cx="36" cy="12" r="12" fill="#FFDC97" />
          <circle
            cx="36"
            cy="12"
            r="7.84615"
            stroke="#FFD179"
            stroke-width="2.30769"
          />
          <circle cx="12" cy="12" r="12" fill="#F76D76" />
          <circle
            cx="12"
            cy="12"
            r="7.84615"
            stroke="#F55761"
            stroke-width="2.30769"
          />
          <circle cx="36" cy="36" r="12" fill="#F76D76" />
          <circle
            cx="36"
            cy="36"
            r="7.84615"
            stroke="#F55761"
            stroke-width="2.30769"
          />
        </svg>
      </div>
      <Presence>
        <Show when={props.show}>
          <Motion.h1 class={styles.text} {...textAnimations}>
            FOURS
          </Motion.h1>
        </Show>
      </Presence>
    </div>
  );
}
