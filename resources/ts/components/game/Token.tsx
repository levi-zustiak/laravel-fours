import gsap from 'gsap';
import { P } from '@pixi/renderer';
import { JSXElement, onMount, splitProps } from 'solid-js';

export function Token(props: any): JSXElement {
  let ref;

  const [local, pixiProps] = splitProps(props, ['state']);

  onMount(() => {
    const y = 720 - 24 - 112 / 2 - 112 * local.state.position.row;

    gsap.fromTo(
      ref,
      { y: -128 },
      { y, duration: 1 - 0.1 * local.state.position.row, ease: 'bounce.out' },
    );
  });

  return (
    <P.Sprite
      ref={ref}
      {...pixiProps}
      x={128 / 2}
      anchor={{ x: 0.5, y: 0.5 }}
    />
  );
}
