import { JSXElement } from 'solid-js';
import { Navigation } from '@components/Navigation';

export function DefaultLayout(props: { children: JSXElement }) {
  return (
    <div class="layout-container">
      <Navigation />
      <main class="layout-main">{props.children}</main>
    </div>
  );
}
