import React from "react";
import "./App.css";
import Header from "./Parts/header/Header";
import Footer from "./Parts/footer/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import routes from "./Services/routes/Routes";
import { useEffect, useMemo, useState } from "react";
import Admin_Login from "./pages/authnication/admin_login";
import Todo from "./components/todo";
import NotFound from "./components/Not-found";
import Home from "./pages/Home";
import Protected from "./Services/routes/protected";

const localUser = JSON.parse(localStorage.getItem("nestor.user"));

function App() {
  const path1 = useLocation();
  const [isLoggedIn, setisLoggedIn] = useState(null);

  const [dimension, setDimensions] = useState(window.screen.width);
  const [sidebarShow, setSidebarShow] = useState(() => {
    if (dimension > 320 && dimension < 768) {
      return false;
    }
    return true;
  });
  const [found, setFound] = useState(false);

  useEffect(() => {
    setisLoggedIn(JSON.parse(localStorage.getItem("nestor.user")));
  }, [ JSON.parse(localStorage.getItem("nestor.user"))]);

  return (
    <>
      {
        <div className="dashboard" hidden={found}>
          {isLoggedIn && 
            <Sidebar
              sidebarShow={sidebarShow}
              setSidebarShow={setSidebarShow}
            />
          
            
          }

          <div className="mainDashboard">
            {isLoggedIn  &&
              <Header
                setSidebarShow={setSidebarShow}
                sidebarShow={sidebarShow}
              />
        
            }
            <div className="content-Wrapper">
              <Routes>
                {routes?.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Protected>
                          <route.element />
                        </Protected>
                      }
                    />
                  );
                })}
                // <Route path="/admin-login" element={<Admin_Login />} exact />
                <Route path="*" element={<Admin_Login />} exact />
              </Routes>
            </div>
            <Footer sidebarShow={sidebarShow} />
          </div>
        </div>
      }
      {found && (
        <Routes>
          <Route path="*" element={<NotFound />} exact />
        </Routes>
      )}
    </>
  );
}

export default App;
