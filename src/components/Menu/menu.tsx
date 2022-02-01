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

const StyledMenuItem = styled(MenuItem)(() => ({
  color: "#EFAE4C",
  width: "100%",
  fontWeight: "bold",
  fontSize: "12px",
}));

const StyledMenuLink = styled(Link)(() => ({
  color: "#FEAAA6",
  textDecoration: "none",
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
                <StyledMenuLink to="/profile">Profile</StyledMenuLink>
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledMenuLink to="/account">My account</StyledMenuLink>
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledMenuLink to="/news">News</StyledMenuLink>
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledMenuLink to="/food">FoodOrder</StyledMenuLink>
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledMenuLink to="/settings">Settings</StyledMenuLink>
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledMenuLink to="/logout">Logout</StyledMenuLink>
              </StyledMenuItem>
            </MenuList>
          </Paper>
        </Stack>
      ) : null}
    </>
  );
};
export default Menu;
