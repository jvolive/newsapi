import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Icon,
  IconButton,
  Menu as MuiMenu,
  MenuItem,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MenuIcon from "@mui/icons-material/Menu";

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function onClick(id: number, value: string) {
    setActive(id);
    setCategory(value);
    handleClose();
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "grey" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <MuiMenu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {links.map((link) => (
            <MenuItem
              key={link.id}
              onClick={() => onClick(link.id, link.value)}
            >
              {link.name}
            </MenuItem>
          ))}
        </MuiMenu>
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
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
