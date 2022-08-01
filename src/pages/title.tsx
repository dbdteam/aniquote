import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Input, Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Title from "../components/Title";

const Titles: NextPage = () => {
  const [quote, setQuote] = useState<Quote[]>([]);
  const [value, setValue] = useState("");

  const getQuote = () => {
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${value}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <Layout>
      <form>
        <Input
          placeholder="Enter title name"
          onChange={(event) => setValue(event.target.value)}
          my={6}
        />
      </form>
      {quote.length > 0 && quote.map((q) => <Title key={q.anime} quote={q} />)}
      <Button onClick={getQuote} mt={6}>
        {value ? "Search" : "Change Quotes"}
      </Button>
    </Layout>
  );
};

export default Titles;
