import { router } from 'inertia-solid';
import { createSignal } from 'solid-js';

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
    <div>
      <h1>Pocketsand</h1>
      <form onSubmit={submit}>
        <input name="name" value={values().name} onChange={handleChange} />
        <input
          name="password"
          value={values().password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
