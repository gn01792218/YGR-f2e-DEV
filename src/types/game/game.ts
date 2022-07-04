import { Lang } from "@/types/lang";
export interface GameData{
  CnName: string;
  EnName: string;
  GameCategoryId: number;
  GameId: string;
  PlatformType: string;
  ThName: string;
  TwName: string;
}
export interface GameCardObj{
  imgSrc: string;
  lang: Lang;
  gameId: string;
}
