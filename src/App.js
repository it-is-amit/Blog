import './App.css';
import Auth from './MajorComponents/Authorization/Auth';
import Homepage from './MajorComponents/Homepage';
import QuestionBody from './MajorComponents/QuestionBody';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/" exact component={Homepage}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/question/:qid" component={QuestionBody}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
