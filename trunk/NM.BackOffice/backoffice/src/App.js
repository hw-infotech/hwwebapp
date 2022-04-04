import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Mainpage from "./components/Mainpage";
import { Navigate } from "react-router";
import routes from './data/routes';

function App() {
  const [login, setLogin] = useState(true)
  return (<div>
    <Router>
      <Routes>
        {routes.map((route, index) => {
            return <Route {...route} key={index} />
          // if (login) {
          //   // return <Route exact={route.exact} path={route.path} element={route.element} key={index} />
          // } else {
          //   return <Route exact={true} path="/" element={<Mainpage />} key={index} />
          // }
        })}
      </Routes>
    </Router>
  </div>
  );
}

export default App;

      // <Route exact path='/' element={<Mainpage/>}></Route>