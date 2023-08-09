import styles from './style.module.css';
import { Icon } from '@components/Icon';

type Props = {
  iconProps: any;
};

export function IconButton(props: Props) {
  console.log(props.iconProps);
  return (
    <div class={styles.container}>
      <Icon {...props.iconProps} />
    </div>
  );
}
