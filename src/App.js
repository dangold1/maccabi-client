import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppPages from "./routes/AppPages";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { loadUserFromTokenAction } from "./store/actions/usersActions";

function App() {
  const dispatch = useDispatch();

  const loadConnectedUser = () => {
    // handle load loged user by token from DB
    dispatch(loadUserFromTokenAction());
  }

  useEffect(() => {
    loadConnectedUser();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <AppPages />
      </Router>
    </div>
  );
}

export default App;
