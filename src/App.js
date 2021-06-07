import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PseudoClasses from './pages/pseudo_classes/PseudoClasses'
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.App}>
      <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pseudo_clases">Pseudo Clases</Link>
            </li>           
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pseudo_clases">
            <PseudoClasses />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}