import React,{Component} from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import './App.css';
import HomeContent from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar';

const hist = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={hist}>
          <NavBar />
          <HomeContent />
          <Footer />
      </Router>
    )
  }
}
export default App;
