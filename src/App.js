import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './components/login';
import SignInSide from './components/login-img';
import SignUp from './components/signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route exact path="/sign" component={SignInSide}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
