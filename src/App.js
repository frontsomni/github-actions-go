import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import Users from './views/Users'
import Topics from './views/Topics'
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/github-actions-go">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/users">
          <Users></Users>
        </Route>
        <Route path="/topics">
          <Topics></Topics>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
