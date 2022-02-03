import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  paper__wrapper: {
    backgroundColor: "#EBE5EF !important",
    marginTop: "10px !important",
    paddingBottom: "30px !important",
    borderRadius: "5% !important",
  },
  grid__container: {
    // backgroundColor: '#EBE5EF',
    marginTop: "10px !important",
    paddingBottom: "30px !important",
  },
  submit__button: {
    width: "250px",
    height: "50px",
    backgroundColor: "#BE9ADA !important",
    left: "calc(50% - 125px)",
    marginBottom: "20px",
  },
  text__field: {
    width: "400px",
    height: "50px",
    left: "calc(50% - 200px)",
  },
});

const LoginForm: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Box className={classes.box}> */}
      {/* <Grid container rowSpacing = {5} className={classes.grid__container}>
        <Box className={classes.box}>
  <Grid item xs={12}>
    <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.text__field}/>
  </Grid>
  <Grid item xs={12}>
    <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.text__field}/>
  </Grid>
  <Grid item xs={12}>
    <Button variant="contained" className={classes.submit__button}>Login</Button>
  </Grid>
        </Box>

</Grid> */}

      <Paper
        sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
        className={classes.paper__wrapper}
      >
        <Grid
          container
          rowSpacing={5}
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.grid__container}
        >
          {/* <div className={classes.div}> */}
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.text__field}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className={classes.text__field}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className={classes.submit__button}>
              Login
            </Button>
          </Grid>
          {/* </div> */}
        </Grid>
      </Paper>
      {/* <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" className={classes.submit__button}>Login</Button> */}

      {/* </Box> */}
    </>
  );
};

export default LoginForm;
