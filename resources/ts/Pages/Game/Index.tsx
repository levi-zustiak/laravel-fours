import { Board } from '@components/game/Board';
import { GameContextProvider } from '@contexts/GameContext';

type Props = {
  game: any;
};

export default function Index({ game }: Props) {
  return (
    <GameContextProvider initialState={game}>
      <Board />
    </GameContextProvider>
  );
}
