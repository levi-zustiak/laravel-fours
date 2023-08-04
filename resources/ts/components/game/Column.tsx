import { Texture } from 'pixi.js';
import { For, Show } from 'solid-js';
import columnPng from '../../assets/column.png';
import { Token } from './Token';
import { P } from '@pixi/renderer';
import { useGame } from '@contexts/GameContext';

export function Column(props: any) {
  const { update, textures } = useGame();

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
              row={index()}
              state={token}
              texture={
                token.played_by ? textures.redToken : textures.yellowToken
              }
            />
          </Show>
        )}
      </For>
    </P.Sprite>
  );
}
