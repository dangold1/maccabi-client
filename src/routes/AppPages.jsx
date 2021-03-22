import { Switch, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import UsersPage from "../pages/UsersPage";

function AppPages() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <UsersPage {...props} />} />
      <Route exact path="/login" render={(props) => <LoginForm {...props} />} />
      <Route path="/register" render={(props) => <RegisterForm {...props} />} />
    </Switch>
  );
}

export default AppPages;
