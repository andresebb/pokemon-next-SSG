import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: JSX.Element
}

const origin = (typeof window === "undefined" ? "" : window.location.origin)

export const Layout = ({ children, title }: Props) => {



  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Andres Betancourt" />
        <meta name="description" content={`Information about pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Information about ${title}  `} />
        <meta property="og:description" content={`this is the page about ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
