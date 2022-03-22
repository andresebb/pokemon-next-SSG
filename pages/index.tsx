import type { NextPage } from 'next'
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout title="Mi app pokemona">
      <Button color="gradient">Hola mundo</Button>
    </Layout>
  )
}

export default Home
