import { Switch, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import UsersPage from "../pages/UsersPage";

function AppPages() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <LoginForm {...props} />} />
      <Route path="/register" render={(props) => <RegisterForm {...props} />} />
      <Route path="/user-panel" render={(props) => <UsersPage {...props} />} />
    </Switch>
  );
}

export default AppPages;
