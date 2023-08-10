export default function Index(props) {
  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(props.user, null, 4)}</pre>
    </div>
  );
}
