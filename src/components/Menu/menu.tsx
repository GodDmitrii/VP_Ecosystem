import { Box, MenuItem, MenuList, Paper, Stack } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  wrapper: {
    width: "30%",
    height: "100%",
  },
  paperWrapper: {
    background: "#F5DEB3",
    height: "100%",
  },
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "#EFAE4C",
  background: "linear-gradient(to top, #fa709a 0%, #fee140 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  borderBottomColor: "black",
  width: "100%",
  height: "100%",
}));

const Menu: React.FC = () => {
  const classes = useStyles();
  return (
    <Stack spacing={0} direction={"column"} className={classes.wrapper}>
      <Paper className={classes.paperWrapper}>
        <MenuList>
          <StyledMenuItem>Profile</StyledMenuItem>
          <StyledMenuItem>My account</StyledMenuItem>
          <StyledMenuItem>Logout</StyledMenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
};
export default Menu;
