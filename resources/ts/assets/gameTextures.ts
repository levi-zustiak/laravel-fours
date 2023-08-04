import { Texture } from 'pixi.js';
import board from './board.png';
import column from './column.png';
import redToken from './red_token.png';
import yellowToken from './yellow_token.png';

export const textures = {
  board: Texture.from(board),
  column: Texture.from(column),
  redToken: Texture.from(redToken),
  yellowToken: Texture.from(yellowToken),
};
