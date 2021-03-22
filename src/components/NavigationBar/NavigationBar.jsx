import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearPreviousLogedUser } from "../../store/actions/usersActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  buttonsDivider: {
    flexGrow: 1,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loginUser } = useSelector((state) => state.authReducer);

  const signOut = (e) => {
    dispatch(clearPreviousLogedUser());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <Button color="inherit">Users Table</Button>
          </Link>
          <div className={classes.buttonsDivider}></div>

          {/* Register new user*/}
          <Link to="/register" className={classes.link}>
            <Button color="inherit">Register</Button>
          </Link>

          {/* handle login dependent user login in localStorage*/}
          {loginUser ? (
            <Button color="inherit" onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <Link to="/login" className={classes.link}>
              <Button color="inherit">Sign In</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
