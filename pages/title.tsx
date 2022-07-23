import Layout from "../components/Layout";
import type { NextPage } from "next";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { Input, Button } from "@chakra-ui/react";

const Titles: NextPage = () => {
  const [titlequote, setTitlequote] = useState([]);
  const [value, setValue] = useState("");

  const getTitleQuote = () => {
    const url = `https://animechan.vercel.app/api/quotes/anime?title=${value}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setTitlequote(data));
  };
  useEffect(() => {
    getTitleQuote();
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
        {titlequote.length > 0 &&
          titlequote.map((titlesquote: any) => (
            <Title key={titlesquote.anime} titlesquote={titlesquote} />
          ))}
        <Button onClick={getTitleQuote} mt={6}>
          {value.length > 0 ? 'Search' : 'Change Quotes'}
        </Button>
      </Layout>
    </div>
  );
};

export default Titles;
