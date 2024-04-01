import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import NewsGrid from "../newsGrid/newsGrid";
import Menu from "../Menu/menu";

interface Article {
  url: string;
  publishedAt: string;
  urlToImage: string;
  title: string;
  source: {
    id: string;
    name: string;
  };
  description: string;
}

function NewsHome() {
  const [items, setItems] = useState<Article[]>([]);
  const [active, setActive] = useState<number>(1);
  const [category, setCategory] = useState<string>("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cf777b2e084849c5b3972583e6aa19e0`
    )
      .then((res) => res.json())
      .then((data) => {
        const articles: Article[] = data.articles;
        const filteredItems = articles.filter((item) => item.urlToImage);
        setItems(filteredItems);
      });
  }, [category]);

  return (
    <Container>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </Container>
  );
}
export default NewsHome;
