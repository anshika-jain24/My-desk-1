import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Desk from './pages/Desk/Desk';
import GroupStudying from './pages/GroupStudy/GroupStudy';
import College from "./pages/College/College"
import Personal from './pages/Personal/Personal'
import Assignment from './pages/Assignment/Assignment'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/desk" exact component={Desk} />
          <Route path="/login" exact component={Login} />
          <Route path="/groupstudying" exact component={GroupStudying} />
          <Route path="/college" exact component={College} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/assignment" exact component={Assignment} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;