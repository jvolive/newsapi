import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#757575", marginBottom: "20px" }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <NewspaperIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News APP
        </Typography>
        <Button color="inherit">Botão 1</Button>
        <Button color="inherit">Botão 2</Button>
        <Button color="inherit">Botão 3</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
