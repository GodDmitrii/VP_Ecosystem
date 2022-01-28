import { MenuItem, MenuList, Paper, Stack } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IMenuData } from "../../interfaces/menu-interface";
import { MenuContext } from "../app";

const useStyles = makeStyles({
  wrapper: {
    width: "20%",
    height: "calc(100vh - 60px)",
    background: "#E6E6FA",
  },
  menu__list: {
    background: "#E6E6FA",
    height: "100%",
  },
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#EFAE4C",
  background: "linear-gradient(to top, #fa709a 0%, #fee140 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  width: "100%",
  fontWeight: "bold",
  fontSize: "12px",
}));

const Menu: React.FC<IMenuData> = (props: IMenuData): JSX.Element => {
  const classes = useStyles();
  const menuIsOpened = useContext(MenuContext);

  return (
    <>
      {menuIsOpened ? (
        <Stack spacing={0} direction={"column"} className={classes.wrapper}>
          <Paper>
            <MenuList className={classes.menu__list}>
              <StyledMenuItem>
                <Link to="/profile">Profile</Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/account">My account</Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/news">News</Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/food">FoodOrder</Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/settings">Settings</Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/logout">Logout</Link>
              </StyledMenuItem>
            </MenuList>
          </Paper>
        </Stack>
      ) : null}
    </>
  );
};
export default Menu;
