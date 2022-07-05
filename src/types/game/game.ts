import { Lang } from "@/types/lang";
export interface GameData {
  CnName: string;
  EnName: string;
  GameCategoryId: number;
  GameId: string;
  PlatformType: string;
  ThName: string;
  TwName: string;
}
export interface GameCardObj {
  imgSrc: string;
  lang: Lang;
  gameId: string;
  gameCategoryId: number;
  gameCnName: string;
}
export enum GameCategory {
  ALLGAME = 0,
  SLOT = 1,
  FISH = 5,
}
