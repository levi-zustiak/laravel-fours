import { Texture } from 'pixi.js';
import { For, Show } from 'solid-js';
import columnPng from '../../assets/column.png';
import { Token } from './Token';
import redTokenPng from '../../assets/red_token.png';
import yellowTokenPng from '../../assets/yellow_token.png';
import { P } from '@pixi/renderer';
import { useGame } from '@contexts/GameContext';

export function Column(props: any) {
  const redToken = Texture.from(redTokenPng);
  const yellowToken = Texture.from(yellowTokenPng);

  const { update } = useGame();

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
