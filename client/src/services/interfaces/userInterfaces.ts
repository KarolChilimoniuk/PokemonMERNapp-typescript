import { IPokemon } from "pokeapi-typescript";

export interface IUserState {
  hasAccount: boolean;
  googleAccount: boolean;
  userId: string;
  userName: string;
  email: string;
  logged: boolean;
  trainers: Array<{
    _id: string;
    name: string;
    episode: string;
    pokemons: Array<IPokemon>;
  }>;
  cookie: boolean;
  error: null;
}
