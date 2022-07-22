import "./App.css";
import Header from "./Parts/header/Header";
import Footer from "./Parts/footer/Footer";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./Services/routes/Routes";
import { useEffect, useMemo, useState } from "react";
import Admin_Login from "./pages/authnication/admin_login";
import Todo from "./components/todo";
import NotFound from "./components/Not-found";
import Home from "./pages/Home";

const localUser = JSON.parse(localStorage.getItem("nestor.user"));

function App() {
  const path1 = useLocation();
  const [sidebarShow, setSidebarShow] = useState(true);
  const [found, setFound] = useState(false);

  // useMemo(() => {
  //   getRoute()
  // }, [])
  let a;
  const getRoute = (path) => {
    if (path1.pathname === path) {
      a = false;
    } else {
      a = true;
    }
  };
  useEffect(() => {
    setFound(a);
  }, [a]);
  return (
    <>
      {localUser ? (
        <>
          {
            <div className="dashboard" hidden={found}>
              <Sidebar sidebarShow={sidebarShow} />
              <div className="mainDashboard">
                <Header
                  setSidebarShow={setSidebarShow}
                  sidebarShow={sidebarShow}
                />
                <div className="content-Wrapper">
                  <Routes>
                    {routes?.map((_) => {
                      if (path1.pathname === _.path) {
                        return <Route {..._} />;
                      }
                    })}
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
      ) : (
        <Routes>
          <Route path="/" element={<Admin_Login />} exact />
        </Routes>
      )}
    </>
  );
}

export default App;
