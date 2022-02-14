import "./App.css";

import { Switch, Route } from "react-router-dom";
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
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/productEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/productlist" component={ProductListScreen} />
            <Route path="/admin/user/:id" component={UserEditScreen} />
            <Route path="/admin/userList" component={UserListScreen} />
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
