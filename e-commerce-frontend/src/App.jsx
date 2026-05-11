/* eslint-disable react-hooks/set-state-in-effect */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";
import CartProvider, { CartContext } from "./service/CartProvider";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";

const App = () => {

const {isLogin}=useContext(CartContext)
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute authenticated={isLogin}>
                <CartPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CartProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute authenticated={isLogin}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="products"
          element={
            <ProtectedRoute authenticated={isLogin}>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute authenticated={isLogin}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
