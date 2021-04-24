import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './pages/Landing/Landing';
import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Desk from './pages/Desk/Desk';
import FileUpload from './Components/PdfViewer/FileUpload';
import PersonalDrawer from './pages/Personal/PersonalDrawer';
import Midway from './Components/Midway';
import GroupStudying from './pages/GroupStudy/GroupStudy';
import Pdfviewer from './Components/PdfViewer/Pdfviewer';
import College from './pages/College/College';

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