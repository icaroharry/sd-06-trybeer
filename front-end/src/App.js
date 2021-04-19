import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import AdminOrders from './pages/AdminOrders';
import UserRegister from './pages/UserRegister';
import AdminProfile from './pages/AdminProfile';
import ClientProfile from './pages/ClientProfile';
import Orders from './pages/Orders';
import AdminOrdersDetails from './pages/AdminOrdersDetails';
import OrderDetails from './pages/OrderDetails';
import ProductAdminInsert from './pages/ProductAdminInsert';
import './App.css';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/products" component={ Products } />
          <Route exact path="/admin/orders" component={ AdminOrders } />
          <Route exact path="/register" component={ UserRegister } />
          <Route exact path="/profile" component={ ClientProfile } />
          <Route exact path="/orders" component={ Orders } />
          <Route exact path="/orders/:id" component={ OrderDetails } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/admin/profile" component={ AdminProfile } />
          <Route exact path="/admin/orders/:id" component={ AdminOrdersDetails } />
          <Route exact path="/admin/products" component={ ProductAdminInsert } />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
