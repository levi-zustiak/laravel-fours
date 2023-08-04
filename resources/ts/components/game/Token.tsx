import gsap from 'gsap';
import { P } from '@pixi/renderer';
import { JSXElement, onMount, Ref, splitProps } from 'solid-js';

export function Token(props: any): JSXElement {
  let ref: Ref<any>;

  const [local, pixiProps] = splitProps(props, ['state', 'row']);

  onMount(() => {
    const y = 720 - 24 - 112 / 2 - 112 * local.row;

    gsap.fromTo(
      ref,
      { y: -128 },
      { y, duration: 1 - 0.1 * local.row, ease: 'bounce.out' },
    );
  });

  return (
    <P.Sprite
      {...pixiProps}
      ref={ref}
      x={128 / 2}
      anchor={{ x: 0.5, y: 0.5 }}
    />
  );
}
