import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Link className="nav-item fw-bold text-decoration-none" to="/login">
            Sign In
          </Link>
        ) : (
          <a className="nav-item text-decoration-none" href="#" disabled>
            Sign In
          </a>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Link
            className="nav-item fw-bold text-decoration-none"
            to="/shipping"
          >
            Shipping
          </Link>
        ) : (
          <a className="nav-item text-decoration-none" href="#" disabled>
            Shipping
          </a>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Link className="nav-item fw-bold text-decoration-none" to="/payment">
            Payment
          </Link>
        ) : (
          <a className="nav-item text-decoration-none" href="#" disabled>
            Payment
          </a>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Link
            className="nav-item fw-bold text-decoration-none"
            to="/placeorder"
          >
            Placeorder
          </Link>
        ) : (
          <a className="nav-item text-decoration-none" href="#" disabled>
            Placeorder
          </a>
        )}{" "}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
