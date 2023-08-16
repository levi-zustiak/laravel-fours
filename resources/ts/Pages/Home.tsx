import { Card } from '@components/Card';
import { Icon } from '@components/Icon';
import { router } from 'inertia-solid';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
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
