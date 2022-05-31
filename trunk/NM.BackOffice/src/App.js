import './App.css';
import Header from './Parts/header/Header';
import Footer from './Parts/footer/Footer'
import index from './pages/Home';
import Sidebar from './components/Sidebar';
import addNewPost from './pages/blogs/addNewPost';
import Layout from './components/layout';
import AddNewPost from './pages/blogs/addNewPost';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './Services/routes/Routes';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("Dashboard")
  const [sidebarShow, setSidebarShow] = useState(true)
  const setPageTitle = (t) => {
    setTitle(t)
  }
  return (
    <Router>
      <div className="flexing">
        <div className='dashboard'>
          <Sidebar sidebarShow={sidebarShow} />
          <div className='mainDashboard' >
            <div>
              <Header setSidebarShow={setSidebarShow} />
              <div className="content-Wrapper" >
                <Routes>
                  {routes?.map((_) => (
                    <Route {..._} />
                  ))}
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Router >


    // <div className='dashboard'>
    //   <Sidebar />
    //   <div className='mainDashboard'>
    //     <Header></Header>
    //     <section >
    //       <AddNewPost />
    //     </section>
    //     <Footer></Footer>
    //   </div>
    // </div>

  );
}

export default App;
