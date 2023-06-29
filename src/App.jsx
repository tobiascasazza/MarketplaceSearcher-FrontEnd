import "../src/styles/App.css";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ProductDetail from "./page/ProductDetail";
import SearchResult from "./page/SearchResult";
import Home from "./page/Home";
import { Provider } from "react-redux";

function App(props) {
  const history = createBrowserHistory();
  return (
    <Provider store={props.store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route component={ProductDetail} exact path="/items/:id" />
            <Route component={SearchResult} path="/items" exact />
            <Route component={Home} path="/" exact />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
