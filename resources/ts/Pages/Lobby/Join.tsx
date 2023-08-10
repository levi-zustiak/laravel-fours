import { router } from 'inertia-solid';
import { createSignal, onCleanup } from 'solid-js';
import { useLobby } from '@contexts/LobbyContext';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export default function Join({ flash }: any) {
  const { wait, unwait } = useLobby();
  const [lobbyId, setLobbyId] = createSignal<string>('');
  console.log(flash);

  const handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    setLobbyId(value);
  };

  const submit = (e) => {
    e.preventDefault();

    if (lobbyId()) {
      wait(lobbyId());

      router.post(`/join/${lobbyId()}`);
    }
  };

  onCleanup(() => {
    if (lobbyId()) {
      unwait(lobbyId());
    }
  });

  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={submit}>
        <Input name="lobby_id" value={lobbyId()} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
