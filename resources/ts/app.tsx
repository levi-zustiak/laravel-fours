import {
  createInertiaApp,
  InertiaComponent,
  SetupOptions,
} from 'inertia-solid';
import { render } from 'solid-js/web';
import './bootstrap';
import '../css/app.css';
import { LobbyProvider } from '@contexts/LobbyContext';
import { DefaultLayout } from '@layouts/DefaultLayout/DefaultLayout';

createInertiaApp({
  resolve: async (name: string) => {
    const pages = import.meta.glob<InertiaComponent>('./Pages/**/*.tsx', {
      import: 'default',
      eager: true,
    });

    console.log(pages);

    const page = pages[`./Pages/${name}.tsx`];

    page.layout = (props) => <DefaultLayout>{props.children}</DefaultLayout>;

    return page;
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
