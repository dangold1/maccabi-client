import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import DataTable from "../components/DataTable/DataTable";
import {
  LoadingSpinner,
  ErrorAlert,
} from "../components/StateComponents/StateComponents";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAction } from "../store/actions/usersActions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
  },
  contentCenter: {
    margin: "0 auto",
    marginTop: 20,
  },
  grid: {
    marginTop: theme.spacing(5),
  },
}));

const UsersPage = () => {
  const classes = useStyles();
  const { isLoading, users, error } = useSelector((state) => state.usersReducer);
  const { loginUser } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  const loadAllUsers = () => {
    // handle load users from DB
    dispatch(loadUsersAction());
  };

  useEffect(() => {
    loadAllUsers();
  }, []);

  if (isLoading) {
    return (
      <div className={classes.contentCenter}>
        <LoadingSpinner />
      </div>
    );
  }

  if (!isLoading && error) {
    return (
      <div className={classes.contentCenter}>
        <ErrorAlert error={error} />
      </div>
    );
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography gutterBottom variant="headline" component="h2">
        Hello {loginUser?.username || "Guest"}!
      </Typography>
      <Typography gutterBottom variant="headline" component="h3">
        You Can See All Users
      </Typography>
      <Grid container justify="center" className={classes.grid}>
        <DataTable data={users} />
      </Grid>
    </Container>
  );
};

export default UsersPage;

