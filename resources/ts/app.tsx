import {
  createInertiaApp,
  InertiaComponent,
  SetupOptions,
} from "inertia-solid";
import { render } from "solid-js/web";
import "./bootstrap";
import "../css/app.css";

createInertiaApp({
  resolveComponent: async (name: string) => {
    const pages = import.meta.glob<InertiaComponent>("./Pages/**/*.tsx", {
      import: "default",
      eager: true,
    });

    return pages[`./Pages/${name}.tsx`];
  },
  setup: ({ el, App, props }: SetupOptions) => {
    render(() => <App {...props} />, el);
  },
});
