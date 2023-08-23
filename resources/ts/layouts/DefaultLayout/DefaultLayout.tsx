import {
  createContext,
  createSignal,
  JSXElement,
  onMount,
  Show,
} from 'solid-js';
import styles from './style.module.css';
import { Profile } from '@components/Profile';
import { SideNavigation } from '@components/SideNavigation';
import { Motion, Presence } from '@motionone/solid';
import { timeline } from 'motion';

export const AnimationContext = createContext({});

export function DefaultLayout(props: { children: JSXElement }) {
  let initialContainer, navigation, account, content;

  const [animated, setAnimated] = createSignal(false);

  onMount(() => {
    timeline(
      [
        [
          initialContainer,
          { width: 0 },
          { delay: 1.25, duration: 1.5, easing: [0.87, 0, 0.13, 1] },
        ],
        [navigation, { transform: 'translateX(0)' }],
        [
          account,
          { opacity: [0, 1], right: '64px', transform: 'translateX(0)' },
          { at: '<' },
        ],
        [content, { y: [150, 0], opacity: [0, 1] }, { at: '<' }],
      ],
      { defaultOptions: { duration: 1, easing: [0.25, 1, 0.5, 1] } },
    );
  });
  return (
    <div class={styles.container}>
      {/*<InitialTransition />*/}
      <Motion.div
        ref={initialContainer}
        // animate={{ width: 0 }}
        // transition={{ delay: 1.25, duration: 1.5, easing: [0.87, 0, 0.13, 1] }}
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
      <SideNavigation ref={navigation} />
      <div
        ref={account}
        style={{
          position: 'fixed',
          top: '64px',
          right: '0',
          transform: 'translateX(100%)',
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Profile />
      </div>
      <main class={styles.main}>
        <div ref={content} class={styles.content}>
          {props.children}
        </div>
      </main>
    </div>
  );
}
