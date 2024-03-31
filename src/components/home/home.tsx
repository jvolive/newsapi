import React, { useEffect, useState } from "react";
import NewsCard from "../newsCard/newsCard";
import { Grid } from "@mui/material";

function Home() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf777b2e084849c5b3972583e6aa19e0"
    )
      .then((res) => res.json())
      .then((json) => {
        const filteredNews = json.articles.filter(
          (article: any) => article.urlToImage !== null
        );
        setNews(filteredNews);
      })
      .catch((error) => {
        console.error("Erro ao buscar as notícias:", error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {news.map((data, index) => (
          <Grid item xs={3} key={index}>
            <NewsCard data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
