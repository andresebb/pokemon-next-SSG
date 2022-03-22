import type { GetStaticProps, NextPage } from 'next'
import { Layout } from '../components/layout';
import { pokeApi } from '../api';

const Home: NextPage = (props) => {

  console.log({ props })

  return (
    <Layout title="Mi app pokemona">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
}

// GetStaticProps solo se pueden usar en Pages
// Solo usar cuando estes seguro que el contenido sera static
// Esta funcion solo se ejecuta del lado del servidor,
// Solo se ejecuta en build time

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get("/pokemon?/limit=151")


  return {
    props: {
      pokemons: data.results
    }
  }
}

export default Home
