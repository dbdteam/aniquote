import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from './Navbar.js'
import Footer from './Footer.js'

interface LayoutProps {
    children: any;
}

const Layout: NextPage<LayoutProps> = ({ children}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AniQuote - random quotes just by click</title>
        <link rel="icon" href="%PUBLIC%/quotes.png"/>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;