import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layout/Layout';
import { FavoritesPokemon } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, [])


  return (
    <Layout title="Pokemones favorites">
      {
        favoritePokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritesPokemon pokemons={favoritePokemons} />
        )
      }

    </Layout>
  )
}

export default FavoritesPage