import { Box, Button, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main__text: {
    color: "#ffe599",
    fontFamily: "Bold Font",
    fontSize: "70px",
  },
  secondary__text: {
    fontFamily: "Open Sans",
    padding: "0px 0px 0px 100px",
  },
  home__button: {
    background: "lightbrown",
    color: "red",
  },
  grid__secondary__text: {
    color: "bisque",
  },
  home__button__link: {
    height: "50px",
    borderRadius: "5px",
    textDecoration: "none",
    background: "cornsilk",
    color: "goldenrod",
    padding: "5px 5px 5px 5px",
  },
  paper: {
    background: "#843939",
  },
});

const ErrorPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <h1 className={classes.main__text}>OOPS!</h1>
          </Grid>
          <Grid item xs={12} className={classes.grid__secondary__text}>
            <h3 className={classes.secondary__text}>
              That page can't be found
            </h3>
            <h4>
              It looks like nothing was found at this location. Try again later.
            </h4>
          </Grid>
          <Grid item xs={12}>
            <Button className={classes.home__button}>
              <Link to="/" className={classes.home__button__link}>
                {" "}
                Go to Homepage{" "}
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ErrorPage;
