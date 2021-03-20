import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import DataTable from "../components/DataTable/DataTable";
import {
  LoadingSpinner,
  ErrorAlert,
} from "../components/StateComponents/StateComponents";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAction } from "../store/actions/usersActions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
  },
  grid: {
    marginTop: theme.spacing(5),
  },
}));

const UsersPage = () => {
  const classes = useStyles();
  const { isLoading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersAction());
  }, []);

  if (isLoading)
    return (
      <Container maxWidth="md" className={classes.root}>
        <LoadingSpinner />
      </Container>
    );

  if (!isLoading && error) {
    return (
      <Container maxWidth="md" className={classes.root}>
        <ErrorAlert error={error} />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography gutterBottom variant="headline" component="h2">
        Users Table
      </Typography> 
      <Grid container justify="center" className={classes.grid}>
        <DataTable data={users} />
      </Grid>
    </Container>
  );
};

export default UsersPage;
