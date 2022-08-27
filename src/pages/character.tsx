import { useState } from "react";
import type { NextPage } from "next";
import { Input, Button, FormControl, Box } from "@chakra-ui/react";
import Character from "../components/Character";

const Characters: NextPage = () => {
  const [quote, setQuote] = useState<Quote[]>([]);
  const [value, setValue] = useState("");

  const getCharQuote = () => {
    const url = `https://animechan.vercel.app/api/quotes/character?name=${value
      .replace(/\s/g, "")
      .toLowerCase()}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setQuote(data));
  };

  return (
    <Box>
      <FormControl display="flex">
        <Input
          placeholder="Enter character name"
          onChange={(event) => setValue(event.target.value)}
          my={6}
          borderRightRadius="0"
        />
        <Button onClick={getCharQuote} mt={6} borderLeftRadius="0">
          Search
        </Button>
      </FormControl>
      {quote.length > 0 &&
        quote.map((q) => <Character key={q.quote} quote={q} />)}
    </Box>
  );
};

export default Characters;
