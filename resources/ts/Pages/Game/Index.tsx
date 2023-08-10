import { Board } from '@components/game/Board';

import { router } from 'inertia-solid';
import { Echo } from '../../bootstrap';
import { onCleanup, onMount } from 'solid-js';
import { GameContextProvider } from '@contexts/GameContext';

type Props = {
  game: any;
};

export default function Index(props: Props) {
  onMount(() => {
    Echo.private(`game.${props.game.id}`).listen('GameUpdate', () => {
      router.reload();
    });

    onCleanup(() => Echo.leaveChannel(`game.${props.game.id}`));
  });
  return (
    <GameContextProvider initialState={props.game}>
      <Board />
    </GameContextProvider>
  );
}
