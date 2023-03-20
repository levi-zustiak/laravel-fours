import { User } from "@/types/user.types";
import { Link } from "inertia-solid";

type Props = {
  user: User;
};

export default function Home({ user }: Props) {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/logout">Logout</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/lobby/create">Create</Link>
      <Link href="/lobby/join">Join</Link>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </div>
  );
}
