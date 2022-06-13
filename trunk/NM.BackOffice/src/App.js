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
import { useEffect, useState } from 'react';
import Admin_Login from './pages/authnication/admin_login';

const localUser = JSON.parse(localStorage.getItem("nestor.user"))
function App() {
  const [title, setTitle] = useState("Dashboard")
  const [sidebarShow, setSidebarShow] = useState(true)
  const setPageTitle = (t) => {
    setTitle(t)
  }

  useEffect(() => {
  }, [])
  console.log(localUser ? true : false);
  return (
    <Router>
      {localUser ?
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
              <Footer sidebarShow={sidebarShow} />
            </div>
          </div>
        </div>
        : <Routes>
          <Route path='/' element={<Admin_Login />} exact />
        </Routes>}
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
