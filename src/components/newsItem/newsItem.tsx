import React from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";

interface NewsItemProps {
  item: {
    url: string;
    publishedAt: string;
    urlToImage: string;
    title: string;
    source: {
      id: string;
      name: string;
    };
    description: string;
  };
}

function NewsItem({ item }: NewsItemProps): JSX.Element {
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop()?.split("/")[0] || "";

  const date = item.publishedAt;
  const formatDate = date.replace("T", "");
  const formatTime = formatDate.replace("Z", "");

  return (
    <Link href={item.url} underline="none" color="inherit">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={item.urlToImage}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            {item.source.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <b>Published At:</b> {formatTime}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default NewsItem;
