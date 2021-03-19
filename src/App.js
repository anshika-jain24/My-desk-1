import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './Components/Landing';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Desk from './Components/Desk';
import FileUpload from './Components/FileUpload';
import PersonalDrawer from './Components/PersonalDrawer';
import Midway from './Components/Midway';
import GroupStudying from './Components/GroupStudying';
import Pdfviewer from './Components/Pdfviewer';
import College from './Components/College';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Landing} />
          <Route path="/desk" exact component={Desk} />
          <Route path="/login" exact component={Login} />
          <Route path="/upload" exact component={FileUpload} />
          <Route path="/mid-way" exact component={Midway} />
          <Route path="/personaldrawer" exact component={PersonalDrawer} />
          <Route path="/groupstudying" exact component={GroupStudying} />
          <Route path="/pdfviewer" exact component={Pdfviewer} />
          <Route path="/college" exact component={College} />

        </div>
      </Switch>
    </Router>
  );
}

export default App;