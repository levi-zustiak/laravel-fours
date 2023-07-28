import {
  createInertiaApp,
  InertiaComponent,
  SetupOptions,
} from 'inertia-solid';
import { render } from 'solid-js/web';
import './bootstrap';
import '../css/app.css';
import { LobbyProvider } from '@contexts/LobbyContext';

createInertiaApp({
  resolve: async (name: string) => {
    const pages = import.meta.glob<InertiaComponent>('./Pages/**/*.tsx', {
      import: 'default',
      eager: true,
    });

    return pages[`./Pages/${name}.tsx`];
  },
  setup: ({ el, App, props }: SetupOptions) => {
    render(
      () => (
        <LobbyProvider>
          <App {...props} />
        </LobbyProvider>
      ),
      el,
    );
  },
});
