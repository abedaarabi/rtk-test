import { pokemonApi } from "../api/todoApi";

export interface Pokemon {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const addPokemon = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    gaddPokemon: builder.mutation<Pokemon, string>({
      query: (data) => ({
        url: "/addpokemon",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useGaddPokemonMutation } = addPokemon;
