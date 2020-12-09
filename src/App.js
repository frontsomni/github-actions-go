import {
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import React, { useState } from 'react'
import {
  color,
  ThemeContext
} from './config/color'
import Home from './views/Home'
import About from './views/About'
import Users from './views/Users'
import Topics from './views/Topics'
import Todos from './views/Todos'
import Theme from './views/Theme'
import './App.css';

function App() {
  var getRandomColor = function(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  function onChangeTheme() {
    setTheme({
      foregroud: getRandomColor(),
      backgroud: getRandomColor()
    })
  }
  const [theme, setTheme] = useState(color.light)
  return (
    <ThemeContext.Provider value={{theme, onChangeTheme}}>
      <HashRouter basename="/github-actions-go">
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
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/theme">Toggle Theme</Link>
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
          <Route path="/todos">
            <Todos></Todos>
          </Route>
          <Route path="/theme">
            <Theme></Theme>
          </Route>
        </Switch>
      </HashRouter>
    </ThemeContext.Provider>
  );
}

export default App;
