import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface NewsData {
  title: string;
  urlToImage: string;
}

function NewsCard({ data }: { data: NewsData }) {
  console.log(data);
  return (
    <div>
      <Box>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={data.urlToImage}
          ></CardMedia>
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default NewsCard;
