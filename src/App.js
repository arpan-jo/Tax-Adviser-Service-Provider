import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Shared/Navbar/NavBar';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

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
               <Route path="/dashboard">
                  <Dashboard />
               </Route>
               <Route path="/login">
                  <Login />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </UserContext.Provider>
   );
}

export default App;
