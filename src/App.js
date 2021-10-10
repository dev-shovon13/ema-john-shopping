import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import OrderDone from './components/OrderDone/OrderDone';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/home">
              <Shop />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <PrivateRoute exact path="/review">
              <OrderReview />
            </PrivateRoute>
            <Route exact path="/shipping">
              <Shipping />
            </Route>
            <PrivateRoute exact path="/order">
              <OrderDone />
            </PrivateRoute>
            <PrivateRoute path="/inventory">
              <Inventory />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
