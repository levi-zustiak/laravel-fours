import { Board } from '@components/game/Board';
import { GameContextProvider } from '@contexts/GameContext';

type Props = {
  game: Game;
};

export default function Index({ game }: Props) {
  return (
    <GameContextProvider initialState={state}>
      <Board />
    </GameContextProvider>
  );
}
