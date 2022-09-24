import { IPokemon } from "pokeapi-typescript";

// export interface IPokemon {
//   abilities: Array<{
//     ability: { name: string; url: string };
//     is_hidden: boolean;
//     slot: number;
//   }>,
//   base_experience: number,

//   ;
// }

export interface IMonstersState {
  pokemonList: Array<IPokemon>;
  filteredPokemons: Array<IPokemon>;
  isLoading: boolean;
  error: boolean;
  pokemonToDisplay: IPokemon;
  pokemonFilterValue: string;
}
