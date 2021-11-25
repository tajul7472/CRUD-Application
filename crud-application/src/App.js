import "../node_modules/bootstrap/dist/css/bootstrap.css"
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from "./Components/layout/Navbar";
import NotFound from "./Components/NotFound";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import AddUsers from "./Components/Users/AddUsers";
import EditUsers from "./Components/Users/EditUsers";
import User from "./Components/Users/User";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/users/add" component={AddUsers}/>
         <Route exact path="/users/edit/:id" component={EditUsers}/>
         <Route exact path="/users/:id" component={User}/>
         <Route component={NotFound}/>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
