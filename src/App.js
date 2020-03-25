import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Review from './Components/Review/Review';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import FooterContent from './Components/FooterContent/FooterContent';
import { AuthContextProvider, PrivateRoute } from './Components/UseAuth/UseAuth';
import OrderComplited from './Components/OrderComplited/OrderComplited';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navigation></Navigation>
        <Router>

          <Switch>
            <Route path="/breakfast">
              <Header></Header>
              <Breakfast></Breakfast>
              <FooterContent></FooterContent>
              <Footer></Footer>
            </Route>
            <Route path="/lunch">
              <Header></Header>
              <Lunch></Lunch>
              <FooterContent></FooterContent>
              <Footer></Footer>
            </Route>
            <Route path="/dinner">
              <Header></Header>
              <Dinner></Dinner>
              <FooterContent></FooterContent>
              <Footer></Footer>
            </Route>
            <Route exact path="/">
              <Header></Header>
              <Breakfast></Breakfast>
              <FooterContent></FooterContent>
              <Footer></Footer>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/cart">
              <Review></Review>
            </Route>
            <PrivateRoute path="/orderComplited">
              <OrderComplited></OrderComplited>
            </PrivateRoute>
            <Route path="/food/:productkey">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      </AuthContextProvider>

    </div>
  );
}

export default App;
