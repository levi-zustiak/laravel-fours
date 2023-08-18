import { Motion, Presence } from '@motionone/solid';
import { ChevronsRight } from 'lucide-solid';
import { createEffect, createSignal, onMount, Show } from 'solid-js';
import styles from './style.module.css';
import { NavItem } from '@components/NavItem';
import { IconButton } from '@components/IconButton';
import { Icon } from '@components/Icon';

const initialIcon = {
  rotate: 0,
};

const animateIcon = {
  rotate: -180,
};

const easing = [0.6, -0.05, 0.01, 0.99];

const initial = {
  width: '112px',
};

const animate = {
  width: '224px',
};

export function SideNavigation() {
  const [open, setOpen] = createSignal<boolean>(false);

  createEffect(() => console.log(open()));

  onMount(() => console.log('mounted'));

  return (
    <Motion.div
      initial={{ width: open() ? '224px' : '112px' }}
      animate={open() ? animate : initial}
      transition={{ duration: 0.5, easing }}
      class={styles.container}
    >
      <div class={styles.toggleButton} onClick={() => setOpen((prev) => !prev)}>
        <Motion.div
          class={styles.toggleIcon}
          initial={{ rotate: open() ? -180 : 0 }}
          animate={open() ? animateIcon : initialIcon}
          transition={{ duration: 0.5, easing }}
        >
          <ChevronsRight size={18} strokeWidth={3} />
        </Motion.div>
      </div>
      <div class={styles.linkContainer}>
        <NavItem href="/">
          <IconButton iconProps={{ name: 'Home' }} />
          <Presence exitBeforeEnter>
            <Show when={open()}>
              <Motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Home
              </Motion.h3>
            </Show>
          </Presence>
        </NavItem>
        <NavItem href="/create">
          <IconButton iconProps={{ name: 'Bell' }} />
          <Presence exitBeforeEnter>
            <Show when={open()}>
              <Motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Create
              </Motion.h3>
            </Show>
          </Presence>
        </NavItem>
        <NavItem href="/profile">
          <Icon name="User" />
          <Presence exitBeforeEnter>
            <Show when={open()}>
              <Motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Join
              </Motion.h3>
            </Show>
          </Presence>
        </NavItem>
      </div>
    </Motion.div>
  );
}
