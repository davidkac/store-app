import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppProducts from "./pages/AppProducts";
import AppCustomers from "./pages/AppCustomers";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/productst">Products</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/pages/AppCustomers" exact>
              <AppCustomers />
            </Route>
            <Route path="/pages/AppProducts" exact>
              <AppProducts />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;