import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";

const Home: NextPage = () => {
  const [quote, setQuote] = useState<Quote[]>([]);

  const getQuote = () => {
    return fetch("https://animechan.vercel.app/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <Layout>
      <Head>
        <title>AniQuotes</title>
        <meta name="description" content="Get Random Anime Qoutes" />
      </Head>
      {quote.length > 0 && quote.map((q) => <Quote key={q.anime} quote={q} />)}
      <Button onClick={getQuote}>Change Quotes</Button>
    </Layout>
  );
};

export default Home;
