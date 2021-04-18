import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Shared/Navbar/NavBar';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Services from './Components/Dashboard/Services/Services';
import AddService from './Components/Dashboard/AddService/AddService';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import AllAdmins from './Components/Dashboard/AllAdmins/AllAdmins';
import AddReview from './Components/Home/Review/AddReview';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Components/Orders/MyOrder';
import CommonBar from './Components/Shared/CommonBar/CommonBar';

export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState();
   return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <Router>
            <NavBar />
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route path="/home">
                  <Home />
               </Route>
               <PrivateRoute path="/common">
                  <CommonBar />
               </PrivateRoute>
               <PrivateRoute exact path="/order">
                  <Orders />
               </PrivateRoute>
               <PrivateRoute exact path="/myOrder">
                  <MyOrder />
               </PrivateRoute>
               <PrivateRoute path="/services">
                  <Services />
               </PrivateRoute>
               <PrivateRoute path="/addService">
                  <AddService />
               </PrivateRoute>
               <PrivateRoute path="/placeOrder">
                  <Dashboard />
               </PrivateRoute>
               <Route path="/addReview">
                  <AddReview />
               </Route>
               <PrivateRoute path="/adminPanel">
                  <AllAdmins />
               </PrivateRoute>
               <PrivateRoute path="/addAnAdmin">
                  <AddAdmin />
               </PrivateRoute>
               <Route path="/login">
                  <Login />
               </Route>
            </Switch>
         </Router>
         <Footer />
      </UserContext.Provider>
   );
}

export default App;
