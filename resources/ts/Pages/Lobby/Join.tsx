import { Lobby } from "@/types/lobby.types";
import { Link } from "@inertiajs/react";

type Props = {
  lobby: Lobby;
};

export default function Join({ lobby }: Props): JSX.Element {
  return (
    <div>
      <h1>Join</h1>
      <pre>{JSON.stringify(lobby, null, 4)}</pre>
      <Link
        href={`/lobby/${lobby.id}`}
        method="patch"
        as="button"
        type="button"
      >
        Leave
      </Link>
    </div>
  );
}
