import React from "react";
import { AppBar, Toolbar, Typography, Button, Icon } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

interface MenuProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Menu: React.FC<MenuProps> = ({ active, setActive, setCategory }) => {
  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" },
    { id: 3, name: "Sports", value: "sports" },
    { id: 4, name: "Technology", value: "technology" },
  ];

  function onClick(id: number, value: string) {
    setActive(id);
    setCategory(value);
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "grey" }}>
      <Toolbar>
        <Icon
          component={NewspaperIcon}
          sx={{ color: "white", marginRight: 1 }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          The Daily News
        </Typography>
        <div>
          {links.map((link) => (
            <Button
              key={link.id}
              color="inherit"
              onClick={() => onClick(link.id, link.value)}
              sx={{
                fontWeight: active === link.id ? "bold" : "normal",
                color: "white",
                textTransform: "none",
              }}
            >
              {link.name}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
