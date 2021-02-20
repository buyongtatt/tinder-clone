import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
