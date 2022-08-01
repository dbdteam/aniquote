import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Input, Button } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Character from "../components/Character";

const Characters: NextPage = () => {
  const [quote, setQuote] = useState<Quote[]>([]);
  const [value, setValue] = useState("");

  const getCharQuote = () => {
    const url = `https://animechan.vercel.app/api/quotes/character?name=${value}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    getCharQuote();
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
      {quote.length > 0 &&
        quote.map((q) => <Character key={q.anime} quote={q} />)}
      <Button onClick={getCharQuote} mt={6}>
        {value ? "Search" : "Change Quotes"}
      </Button>
    </Layout>
  );
};

export default Characters;
