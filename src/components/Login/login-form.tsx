import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Input,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as yup from "yup";

const useStyles = makeStyles({
  paper__wrapper: {
    backgroundColor: "#EBE5EF !important",
    marginTop: "10px !important",
    paddingBottom: "30px !important",
    borderRadius: "5% !important",
  },
  grid__container: {
    marginTop: "10px !important",
    paddingBottom: "30px !important",
  },
  submit__button: {
    width: "250px",
    height: "50px",
    backgroundColor: "#BE9ADA !important",
    left: "calc(50% - 125px)",
    marginTop: "40px",
    marginBottom: "20px",
    // "& .MuiInput-root": {
    //     backgroundColor: 'black !important',
    //   "&:after": {
    //     borderBottom: '2px solid black'
    //   },
    // },
  },
  text__field: {
    width: "400px",
    height: "50px",
    left: "calc(50% - 200px)",
  },
});

const schema = yup
  .object({
    Email: yup.string().email().required(),
    Password: yup.string().min(8).max(32).required(),
  })
  .required();

const StyledErrorValidationResponse = styled("h3")(() => ({
  backgroundColor: "#FAB6B2",
  color: "darkred",
  padding: "10px 10px 10px 25%",
}));

const LoginForm: React.FC = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <h3 style={{ color: "rgb(213 141 141)" }}>Enter your Email</h3>
              <FormControl sx={{ width: "400px" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle email visibility"
                        edge="start"
                      >
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Email"
                  {...register("Email")}
                />
                {errors.Email?.message ? (
                  <StyledErrorValidationResponse>
                    {errors.Email?.message}
                  </StyledErrorValidationResponse>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <h3 style={{ color: "rgb(213 141 141)" }}>Enter your Password</h3>
              <FormControl sx={{ width: "400px" }} variant="outlined">
                <InputLabel htmlFor="Password">Password</InputLabel>
                <OutlinedInput
                  id="Password"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="start"
                      >
                        <KeyIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="start"
                        onClick={visibilityHandler}
                      >
                        {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  {...register("Password")}
                  type={isVisible ? "text" : "password"}
                />
                {errors.Password?.message ? (
                  <StyledErrorValidationResponse>
                    {errors.Password?.message}
                  </StyledErrorValidationResponse>
                ) : (
                  ""
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Input
                type="submit"
                className={classes.submit__button}
                value="Login"
              />
            </Grid>
          </form>
          <Grid item xs={12}>
            <Button>
              <GoogleIcon color="secondary" />
            </Button>
            <Button>
              <FacebookIcon color="primary" />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default LoginForm;
