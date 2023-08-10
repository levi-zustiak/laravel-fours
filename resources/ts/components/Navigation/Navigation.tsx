import { IconButton } from '@components/IconButton';
import { NavItem } from '@components/NavItem';
import styles from './style.module.css';

export function Navigation(props: any) {
  return (
    <nav class={styles.nav}>
      <h2>Fours</h2>
      <div class={styles.container}>
        <NavItem href="/">
          <IconButton iconProps={{ name: 'Home' }} />
        </NavItem>
        <NavItem href="/create">
          <IconButton iconProps={{ name: 'Bell' }} />
        </NavItem>
        <NavItem href="/profile">
          <IconButton iconProps={{ name: 'User' }} />
        </NavItem>
      </div>
    </nav>
  );
}
