import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  // react Routing
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        {/* Adding switch will show the one matched first */}
        <Switch>
          <Route path="/Welcome">
            <Welcome></Welcome>
          </Route>
          {/* we can add exact */}
          <Route path="/Products" exact>
            <Products></Products>
          </Route>
          {/* dynamic route */}
          <Route path="/Products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
