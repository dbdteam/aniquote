import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";
import { Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [aniquote, setAniquote] = useState([]);

  const getAnimeQuote = () => {
    return fetch("https://animechan.vercel.app/api/quotes")
      .then((res) => res.json())
      .then((data) => setAniquote(data));
  };

  useEffect(() => {
    getAnimeQuote();
  }, []);

  return (
    <div>
      <Layout>
        <Head>
          <title>AniQuotes</title>
          <meta name="description" content="Get Random Anime Qoutes" />
        </Head>
        {aniquote.length > 0 &&
          aniquote.map((animequote: any) => (
            <Quote key={animequote.anime} animequote={animequote} />
          ))}
        <Button onClick={getAnimeQuote}>Change Quotes</Button>
      </Layout>
    </div>
  );
};

export default Home;
