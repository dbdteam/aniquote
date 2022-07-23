import Layout from "../components/Layout";
import type { NextPage } from "next";
import Character from "../components/Character";
import { useEffect, useState } from "react";
import { Input, Button } from "@chakra-ui/react";

const Characters: NextPage = () => {
  const [charquote, setCharquote] = useState([]);
  const [value, setValue] = useState("");

  const getCharQuote = () => {
    const url = `https://animechan.vercel.app/api/quotes/character?name=${value}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setCharquote(data));
  };

  useEffect(() => {
    getCharQuote();
  }, []);

  return (
    <div>
      <Layout>
        <form>
          <Input
            placeholder="Enter title name"
            onChange={(event) => setValue(event.target.value)}
            my={6}
          />
        </form>
        {charquote.length > 0 &&
          charquote.map((charsquote: any) => (
            <Character key={charsquote.anime} charsquote={charsquote} />
          ))}
        <Button onClick={getCharQuote} mt={6}>
          {value.length > 0 ? "Search" : "Change Quotes"}
        </Button>
      </Layout>
    </div>
  );
};

export default Characters;
