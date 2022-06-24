import { pokemonApi } from "../api/todoApi";

export interface Pokemon {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  name: string;
  age: number;
}

const extendedApi = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),

  overrideExisting: false,
});

export const { useGetPokemonByNameQuery } = extendedApi;
