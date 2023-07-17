import { router } from 'inertia-solid';
import { createStore } from 'solid-js/store';

export default function Join() {
  const [values, setValues] = createStore({
    lobby_id: '',
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setValues(name, value);
  };

  const submit = (e) => {
    e.preventDefault();

    router.post(`/lobby/join`, values, {
      onStart: (visit) => console.log('start', visit),
      onProgress: (progress) => console.log('progress', progress),
      onSuccess: (page) => console.log('success', page),
      onFinish: (visit) => console.log('finished', visit),
    });
  };

  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={submit}>
        <input
          name="lobby_id"
          value={values.lobby_id}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
