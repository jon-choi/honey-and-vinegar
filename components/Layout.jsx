import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { BsLayoutSplit } from 'react-icons/bs';


export default function Layout({ children }) {
  return (
    <>
  <Head>
    <title>Honey & Vinegar Realty</title>
  </Head>
  <Box maxWidth="1280px" m="auto">
    <header>
      NavBar
    </header>
    <main>
      {children}
    </main>
    <footer>
      Footer
    </footer>
  </Box>
  </>
  );
  
};
