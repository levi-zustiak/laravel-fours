import { Link, router } from 'inertia-solid';
import { createSignal } from 'solid-js';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';
import styles from './style.module.css';
import { AnimatedContainer } from '@components/AnimatedContainer';

export default function Login() {
  const [values, setValues] = createSignal({
    name: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    router.post('/login', values());
  };

  return (
    <AnimatedContainer>
      <div class={styles.container}>
        <h2 style={{ 'margin-bottom': '2rem' }}>Login</h2>
        <form onSubmit={submit} class={styles.form}>
          <div class={styles.fields}>
            <TextField
              label="Username"
              name="name"
              value={values().name}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              value={values().password}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" style={{ 'margin-top': '2rem' }}>
            Submit
          </Button>
        </form>
        <div style={{ display: 'flex', gap: '4px', 'margin-top': '2rem' }}>
          <p>Don't have an account?</p>
          <Link href="/register">Sign up</Link>
        </div>
      </div>
    </AnimatedContainer>
  );
}
