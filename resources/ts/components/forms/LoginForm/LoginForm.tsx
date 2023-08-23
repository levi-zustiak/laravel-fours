import { Link, router } from 'inertia-solid';
import { createSignal } from 'solid-js';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';
import styles from './style.module.css';

export function LoginForm() {
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
    <div class={styles.container}>
      <h2>Sign in</h2>
      <form onSubmit={submit} class={styles.form}>
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
        <Button type="submit">Submit</Button>
      </form>
      <div style={{ display: 'flex', gap: '4px', 'margin-top': '2rem' }}>
        <p>Don't have an account?</p>
        <Link href="/register">Sign up</Link>
      </div>
    </div>
  );
}
