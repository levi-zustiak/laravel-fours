import { Lobby } from '@/types/lobby.types';
import { Link } from 'inertia-solid';
import { onCleanup, onMount } from 'solid-js';
import { useLobby } from '@contexts/LobbyContext';
import { Card } from '@components/Card';
import { Icon } from '@components/Icon';

type Props = {
  lobby: Lobby;
};

export default function Create({ lobby }: Props) {
  const { wait, unwait } = useLobby();

  const copyLink = () =>
    navigator.clipboard.writeText(
      // `${import.meta.env.VITE_APP_URL || ""}/lobby/join/${lobby.id}`,
      lobby.id,
    );

  onMount(() => wait(lobby.id));

  onCleanup(() => unwait(lobby.id));

  return (
    <div>
      <h1>Create</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Card
          title="Invite"
          message="Invite another player"
          onClick={() => alert('invite')}
          slots={{ icon: <Icon name="Send" /> }}
        />
        <Card
          title="Copy"
          message="Copy invite to share"
          onClick={copyLink}
          slots={{ icon: <Icon name="Copy" /> }}
        />
      </div>
      <Link
        href={`/lobby/delete/${lobby.id}`}
        method="delete"
        as="button"
        type="button"
      >
        Cancel
      </Link>
    </div>
  );
}
