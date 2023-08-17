import styles from './style.module.css';
import { Icon } from '@components/Icon';

export function Notifications() {
  return (
    <div class={styles.container}>
      <Icon name="Bell" />
    </div>
  );
}
