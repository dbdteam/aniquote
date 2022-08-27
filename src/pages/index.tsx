import { useState } from "react";
import type { NextPage } from "next";
import { Button, Box } from "@chakra-ui/react";
import Quote from "../components/Quote";

const Home: NextPage = () => {
  const [quote, setQuote] = useState<Quote[]>([]);

  const getQuote = () => {
    return fetch("https://animechan.vercel.app/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  return (
    <Box>
      {quote.length > 0 && quote.map((q) => <Quote key={q.anime} quote={q} />)}
      <Button onClick={getQuote}>Change</Button>
    </Box>
  );
};

export default Home;
