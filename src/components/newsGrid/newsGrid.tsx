import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import NewsItem from "../newsItem/newsItem";

interface NewsGridProps {
  items: {
    url: string;
    publishedAt: string;
    urlToImage: string;
    title: string;
    source: {
      id: string;
      name: string;
    };
    description: string;
  }[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ items }) => {
  return (
    <Grid container spacing={3}>
      {items.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Card>
            <CardContent>
              <NewsItem item={item} />
            </CardContent>
          </Card>
        </Grid>
      ))}
      {items.length === 0 && <Grid item xs={12}></Grid>}
    </Grid>
  );
};

export default NewsGrid;
