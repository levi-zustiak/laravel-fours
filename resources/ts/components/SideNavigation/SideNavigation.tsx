import { Motion, Presence } from '@motionone/solid';
import { ChevronsRight } from 'lucide-solid';
import { createSignal, Show } from 'solid-js';
import styles from './style.module.css';
import { NavItem } from '@components/NavItem';
import { IconButton } from '@components/IconButton';
import { Logo } from '@components/Logo';

const initialIcon = {
  rotate: 0,
};

const animateIcon = {
  rotate: -180,
};

const easing = [0.6, -0.05, 0.01, 0.99];

const initial = {
  width: '120px',
};

const animate = {
  width: '224px',
};

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
    easing,
    delay: 0.1,
  },
};

export function SideNavigation() {
  const [open, setOpen] = createSignal<boolean>(false);

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
      <Logo show={open()} />
      <div class={styles.linkContainer}>
        <NavItem href="/">
          <IconButton iconProps={{ name: 'Home' }} />
          <Presence exitBeforeEnter>
            <Show when={open()}>
              <Motion.h3 {...textAnimations}>Home</Motion.h3>
            </Show>
          </Presence>
        </NavItem>
        <NavItem href="/create">
          <IconButton iconProps={{ name: 'Bell' }} />
          <Presence exitBeforeEnter>
            <Show when={open()}>
              <Motion.h3 {...textAnimations}>Create</Motion.h3>
            </Show>
          </Presence>
        </NavItem>
        <NavItem href="/profile">
          <IconButton iconProps={{ name: 'User' }} />
          <Presence exitBeforeEnter>
            <Show when={open()}>
              <Motion.h3 {...textAnimations}>Join</Motion.h3>
            </Show>
          </Presence>
        </NavItem>
      </div>
    </Motion.div>
  );
}
