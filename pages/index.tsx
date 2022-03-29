import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layout';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid, } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';
import Image from 'next/image';

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title="Mi app pokemona">
      <>
        <Image
          src="/img/banner.png"
          width={200}
          height={150}
        />
        <Grid.Container gap={2} justify="flex-start">
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
      </>
    </Layout>
  )
}

// GetStaticProps solo se pueden usar en Pages
// Solo usar cuando estes seguro que el contenido sera static
// Esta funcion solo se ejecuta del lado del servidor,
// Solo se ejecuta en build time

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151")

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))


  return {
    props: {
      pokemons
    }
  }
}

export default Home
