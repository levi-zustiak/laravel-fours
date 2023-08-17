import { Icon } from '@components/Icon';
import styles from './style.module.css';
import { router } from 'inertia-solid';

export function Profile() {
  return (
    <div class={styles.container} onClick={() => router.get('/profile')}>
      <Icon name="User" />
    </div>
  );
}
