import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart/Cart";
import {useSelector} from 'react-redux'

function App() {

  const cartItems = useSelector(state=>state.allProducts.cart)
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetail} />
          {Object.keys(cartItems).length ===0 ? 
          <Redirect to="/" /> :
          <Route exact path="/cartItem" component={Cart} />

          }
          <Route>404 not found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
