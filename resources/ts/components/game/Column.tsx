import { Texture } from 'pixi.js';
import { For, Show } from 'solid-js';
import columnPng from '../../assets/column.png';
import { Token } from './Token';
import redTokenPng from '../../assets/red_token.png';
import yellowTokenPng from '../../assets/yellow_token.png';
import { P } from '@pixi/renderer';
import { router, usePage } from 'inertia-solid';

export function Column(props: any) {
  const redToken = Texture.from(redTokenPng);
  const yellowToken = Texture.from(yellowTokenPng);
  const { game } = usePage().props;

  // const { update } = useGame();

  const update = (col: number) => {
    try {
      router.post(`/game/${game.id}/update`, {
        col,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <P.Sprite
      {...props}
      texture={Texture.from(columnPng)}
      interactive
      cursor="pointer"
      pointerdown={() => update(props.index)}
    >
      <For each={props.state}>
        {(token, index) => (
          <Show when={token}>
            <Token
              state={token}
              texture={index() % 2 === 0 ? redToken : yellowToken}
            />
          </Show>
        )}
      </For>
    </P.Sprite>
  );
}
