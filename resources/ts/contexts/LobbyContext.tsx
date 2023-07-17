import { createContext, JSX, ParentProps, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Echo } from '../bootstrap.js';

type LobbyContext = {
  wait: (lobbyId: string) => void;
  unwait: (lobbyId: string) => void;
  state: Lobby;
};

type User = {
  id: string;
  name: string;
};

type Lobby = {
  id: string | null;
  host: User | null;
  peer: User | null;
};

type Game = any;

type LobbyStartEvent = {
  lobby: Lobby;
  game: Game;
};

const LobbyContext = createContext<LobbyContext>();

const LobbyProvider = (props: ParentProps): JSX.Element => {
  const [state, setState] = createStore<Lobby>({
    id: null,
    host: null,
    peer: null,
  });

  const wait = (lobbyId: string) => {
    Echo.private(`lobby.${lobbyId}`).listen(
      'StartGame',
      ({ lobby, game }: LobbyStartEvent) => {
        console.log(lobby, game);
        // if (lobby) {lobby
        //   setState(lobby);
        //
        //   router.get(`/game/${game.id}`);
        // }
      },
    );
  };

  const unwait = (lobbyId: string) => {
    Echo.private(`lobby.${lobbyId}`).stopListening('lobby:start');
  };

  return (
    <LobbyContext.Provider value={{ wait, unwait, state }}>
      {props.children}
    </LobbyContext.Provider>
  );
};

const useLobby = () => {
  const context = useContext(LobbyContext);

  if (context === undefined) {
    throw new Error("LobbyContext was used outside of it's Provider");
  }

  return context;
};

export { LobbyContext, LobbyProvider, useLobby };
