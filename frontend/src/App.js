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

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
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
