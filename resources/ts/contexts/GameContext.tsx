import {
  createContext,
  createEffect,
  onCleanup,
  onMount,
  useContext,
} from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { router, usePage } from 'inertia-solid';
import { Echo } from '../bootstrap';

type Token = {
  col: number;
  row: number;
  player: any;
};

type Column = Array<Token | null>;

type Board = Column[];

type GameState = {
  id: number;
  players: Record<string, any>;
  currentPlayer: string;
  gameOver: boolean;
  board: Board;
};

type Props = {
  initialState: GameState;
  children: any;
};

type GameContext = {
  state: GameState;
  update: (col: number) => void;
};

const GameContext = createContext<GameContext | undefined>(undefined);

const GameContextProvider = (props: Props) => {
  const [state, setState] = createStore<GameState>(props.initialState);
  const game = () => usePage().props.game;

  createEffect(() => console.log('game', game()));

  console.log(game());

  const update = (col: number) => {
    try {
      router.post(`/game/${game().id}/update`, {
        id: state.id,
        col,
      });
    } catch (e) {
      console.log(e);
    }
  };

  onMount(() => {
    Echo.private(`game.${game().id}`).listen('GameUpdate', ({ game }) => {
      console.log('update', game);
      setState(reconcile(game));
    });

    onCleanup(() => Echo.leaveChannel(`orders.${state.id}`));
  });

  return (
    <GameContext.Provider value={{ state, update }}>
      {props.children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("GameContext was used outside of it's provider");
  }

  return context;
};

export { GameContext, GameContextProvider, useGame };
