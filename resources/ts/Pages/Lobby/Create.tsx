import { Lobby } from '@/types/lobby.types';
import { Link } from 'inertia-solid';
import { onCleanup, onMount } from 'solid-js';
import { useLobby } from '@contexts/LobbyContext';

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
      <pre>{JSON.stringify(lobby, null, 4)}</pre>
      <Link
        href={`/lobby/delete/${lobby.id}`}
        method="delete"
        as="button"
        type="button"
      >
        Cancel
      </Link>
      <button onClick={copyLink}>Copy Invite</button>
    </div>
  );
}
