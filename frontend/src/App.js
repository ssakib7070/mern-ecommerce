import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

// components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import placeOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/placeorder" component={placeOrderScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact component={HomeScreen} />
            {/* <Route path="/users">
            <Users />
          </Route> */}
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
