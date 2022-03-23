import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layout'
import { Pokemon } from '../../interfaces';

interface Props {
  pokemon: any;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const router = useRouter()
  console.log(pokemon)

  return (
    <Layout title="EL pokemon">
      <h1>{pokemon.name}</h1>
    </Layout>
  )
}


//La Magia de SSG es que obtenemos toda la data al momento de hacer build de nuestra app

//Sucede primero

//This is for dynamic routes
//Estamos definiendo esas  pages de pokemones
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map(id => (
      {
        params: { id }
      }
    )),
    fallback: false // false or 'blocking'
  };
}

//Sucede Despues
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)


  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage