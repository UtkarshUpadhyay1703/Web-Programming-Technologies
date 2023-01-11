import logo from './logo.svg';
import './App.css';
import {useState} from "react";
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Register from "./component/Register";
// import Signin from './component/Signin';
// import Display from "./component/Display";


function App() {
  let [StudArr,SetStudArr]=useState({studPRN:"",studPass:"",studConfpass:""});
  let AddList=(ob)=>{
    SetStudArr([...StudArr,{...ob}]);
  }
  return (
    // <div className="App">
    //   <Router>
    //     <Switch>
    //       <Route path="/"  exact render={ (props)=>(<Register {...props}  AddStud={AddList}></Register>)}></Route>
    //       <Route path="/Signin" render={(props)=>(<Signin {...props} Student={StudArr}  ></Signin>)}></Route>
    //     </Switch>
    //   </Router>
    // </div>
    <div>
      <Register AddStud={AddList}></Register>
    </div>

  );
}

export default App;
