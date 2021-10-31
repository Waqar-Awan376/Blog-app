import { Route, Switch } from 'react-router';
import { Router } from "@reach/router";
import './App.css';
import Navbar from './Components/navbar';
import NewPost from './Components/newPost';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <NewPost />
        </Route>
        <Route path='/newpost' exact>
          <NewPost />
        </Route>
      </Switch>
    </>
  );
}

export default App;
