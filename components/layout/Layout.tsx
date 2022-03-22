import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: JSX.Element
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Andres Betancourt" />
        <meta name="description" content={`Information about pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main style={{
        padding: "0px, 20px",
      }}>
        {children}
      </main>
    </>
  )
}
