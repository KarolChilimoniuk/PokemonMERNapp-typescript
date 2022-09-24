import { IUserState } from "./userInterfaces";
import { IMonstersState } from "./monsterInterfaces";

export interface IRootState {
  monsters: IMonstersState;
  user: IUserState;
}
