import { AnimatedContainer } from '@components/AnimatedContainer';

export default function Index(props) {
  return (
    <AnimatedContainer>
      <h1>Profile</h1>
      <pre>{JSON.stringify(props.user, null, 4)}</pre>
    </AnimatedContainer>
  );
}
