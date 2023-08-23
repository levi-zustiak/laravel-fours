import styles from './style.module.css';
import { createSignal } from 'solid-js';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';
import { router } from 'inertia-solid';

export function SignUp() {
  const [values, setValues] = createSignal({
    name: '',
    email: '',
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

    router.post('/register', values());
  };

  return (
    <div class={styles.container}>
      <h2>Sign up</h2>
      <form onSubmit={submit} class={styles.form}>
        <TextField
          label="Username"
          name="username"
          value={values().name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          value={values().email}
          onChange={handleChange}
        />
        <TextField
          label="password"
          name="password"
          value={values().password}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
