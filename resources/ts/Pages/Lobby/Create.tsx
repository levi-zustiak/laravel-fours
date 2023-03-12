import { Lobby } from "@/types/lobby.types";
import { Link } from "inertia-solid";
import { createEffect } from "solid-js";

type Props = {
  lobby: Lobby;
};

export default function Create({ lobby }: Props) {
  const copyLink = () =>
    navigator.clipboard.writeText(
      `${import.meta.env.VITE_APP_URL || ""}/lobby/join/${lobby.id}`,
    );

  createEffect(() => {
    window.Echo.join(`lobby.${lobby.id}`)
      .here((users: User[]) => console.log(users))
      .joining((user: User) => console.log(user))
      .leaving((user: User) => console.log(user))
      .error((error: any) => console.log(error));
  });

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
