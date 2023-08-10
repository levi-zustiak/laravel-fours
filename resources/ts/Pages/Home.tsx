import { User } from '@types/user.types';
import { Card } from '@components/Card';
import { Icon } from '@components/Icon';
import { router } from 'inertia-solid';

type Props = {
  user: User;
};

export default function Home({ user }: Props) {
  return (
    <div>
      <h1>Welcome back, {user.name}!</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Card
          title="Create"
          message="Play a game with a friend"
          onClick={() => router.get('/create')}
          slots={{ icon: <Icon name="PlusSquare" /> }}
        />
        <Card
          title="Join"
          message="Join a existing game"
          onClick={() => router.get('/join')}
          slots={{ icon: <Icon name="UserPlus" /> }}
        />
      </div>
    </div>
  );
}
