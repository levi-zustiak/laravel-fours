import { Lobby } from "@/types/lobby.types";
import { Channel } from "laravel-echo";

/*  useEffect(() => {
    window.Echo.join(`lobby.${lobby.id}`)
      .here((users: User[]) => console.log(users))
      .joining((user: User) => console.log(user))
      .leaving((user: User) => console.log(user))
      .error((error: any) => console.log(error));

    return () => {
      window.Echo.channel("lobby").stopListening(".lobby.connected");
    };
  }, []);

type User = {
  id: number;
  name: string;
};

const channel = window.Echo.private("lobby");

const LobbyContext = createContext<{ channel: Channel } | undefined>(undefined);

function LobbyContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ channel });

  return (
    <LobbyContext.Provider value={state}>{children}</LobbyContext.Provider>
  );
}

function useLobbyContext() {
  const context = useContext(LobbyContext);

  if (context === undefined) {
    throw new Error("LobbyContext was used outside of it's provider");
  }

  return context;
}

export { LobbyContext, LobbyContextProvider, useLobbyContext };
*/
