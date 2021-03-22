import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SIGNIN_USER_API } from "../../utils/keys";
import axiosService from "../../services/axios.service";
import localStorageService from "../../services/localStorage.service";
import { useDispatch } from "react-redux";
import { setLoginUserAction } from "../../store/actions/usersActions";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    marginTop: "15px",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);

  // handle onSubmit save loged user to localStorage & redux-store
  const onSubmit = async (data) => {
    try {
      const response = await axiosService.send({
        method: "post",
        url: SIGNIN_USER_API,
        data,
      });
      localStorageService.saveUser(response.data);
      dispatch(setLoginUserAction(response.data));
      setError(false);

      // redirect to users table
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      {/*Login header */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        {/* form */}
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            inputRef={register}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>

        {/* Error alert if error */}
        <div className={classes.alert}>
          {error && (
            <Alert severity="error" onClose={() => setError(false)}>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;
