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
import { Texture } from 'pixi.js';
import board from '../assets/board.png';
import column from '../assets/column.png';
import redToken from '../assets/red_token.png';
import yellowToken from '../assets/yellow_token.png';
import { Game } from '@types/game.types';

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
  textures: {
    board: Texture;
    column: Texture;
    redToken: Texture;
    yellowToken: Texture;
  };
};

const GameContext = createContext<GameContext | undefined>(undefined);

const GameContextProvider = (props: Props) => {
  const [state, setState] = createStore<GameState>(props.initialState);
  const { game } = usePage().props;

  createEffect(() => console.log('game', game()));

  const update = (col: number) => {
    router.post(`/game/${game.id}/update`, {
      col,
    });
  };

  onMount(() => {
    Echo.private(`game.${game().id}`).listen(
      'GameUpdate',
      ({ game }: { game: Game }) => {
        console.log('update', game);
        setState(reconcile(game));
      },
    );

    onCleanup(() => Echo.leaveChannel(`orders.${state.id}`));
  });

  const textures = {
    board: Texture.from(board),
    column: Texture.from(column),
    redToken: Texture.from(redToken),
    yellowToken: Texture.from(yellowToken),
  };

  return (
    <GameContext.Provider value={{ state, update, textures }}>
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
