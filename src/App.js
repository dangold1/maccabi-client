import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppPages from "./routes/AppPages";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
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
