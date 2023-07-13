export type Token = {
  col: number;
  row: number;
  player: any;
};

export type Column = Array<Token | null>;

export type Board = Column[];

export type Game = {
  id: number;
  slug: string;
  players: any;
  currentPlayer: any;
  gameOver: boolean;
  board: Board;
};
