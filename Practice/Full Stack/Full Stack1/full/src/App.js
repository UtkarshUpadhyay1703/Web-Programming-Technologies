import './App.css';
import HappilyService from './Component/HappilyService';
import Display from './Component/Display';
import AddHappy from "./Component/AddHappy";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Display}></Route>
          {/* <Route path="/" exact render={(props)=>(<Display {...props} ></Display>)}></Route> */}
          <Route path="/Display" exact component={Display}></Route>
          <Route path="/AddHappy" component={AddHappy}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
