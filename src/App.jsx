import "../src/styles/App.css";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import DetalleDelProducto from "./page/DetalleDelProducto";
import ResultadoBusqueda from "./page/ResultadoBusqueda";
import Inicio from "./page/Inicio";
import { Provider } from "react-redux";

function App(props) {
  const history = createBrowserHistory();
  return (
    <Provider store={props.store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route component={DetalleDelProducto} exact path="/items/:id" />
            <Route component={ResultadoBusqueda} path="/items" exact />
            <Route component={Inicio} path="/" exact />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
