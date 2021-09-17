import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppPosts from './containers/AppPosts';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/posts">
            <AppPosts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
