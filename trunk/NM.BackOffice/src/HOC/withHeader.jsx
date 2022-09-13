import { useEffect, useState } from "react";
import BasicBreadcrumbs from "../components/breadcumbs";
import { Filters } from "../components/header-filter";
import Sidebar from "../components/Sidebar";
import Footer from "../Parts/footer/Footer";
import Header from "../Parts/header/Header";

const withHeader = (Component) => {
  const NewComp = () => {
    const [tableData, setTableData] = useState();
    const [showalert, setShowalert] = useState(false);
    const [title, settitle] = useState();
    const [placeholder, setPlaceholder] = useState();
    const [serarchwith, setSearchwith] = useState();
    const [route, setRoute] = useState();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [options, setOptions] = useState();
    //const[add,setAddshow]=useState()
    // const requestSearch = (searchedVal) => {
    //   const filteredRows = data.filter((row) => {
    //     return row[serarchwith]
    //       .toLowerCase()
    //       .includes(searchedVal.toLowerCase());
    //   });
    //   setTableData(filteredRows);
    // };
    return (
      <>
        <BasicBreadcrumbs route={route} />
        {
          // <Filters
          //   placeholder={placeholder}
          //   requestSearch={requestSearch}
          //   showalert={showalert}
          //   handleShow={handleShow}
          //   setShowalert={setShowalert}
          //   titl={title}
          //   add={add}
          //   options={options}
          // />
        }
        <Component
          //tableData={tableData}
         // setTableData={setTableData}
          //settitle={settitle}
          setRoute={setRoute}
          //setPlaceholder={setPlaceholder}
         // handleShow={handleShow}
         // show={show}
         // setShow={setShow}
         // setSearchwith={setSearchwith}
        //  setOptions={setOptions}
        />
      </>
    );
  };
  return NewComp;
  {
    /*const WithHeaderComp = () => {
        const [sidebarShow, setSidebarShow] = useState(true)
        const [title, setTitle] = useState("Dashboard")
        return <div className="">
            <div className="flexing">
                <div className='dashboard'>
                    <Sidebar sidebarShow={sidebarShow} />
                    <div className='mainDashboard' >
                        <div>
                            <Header title={title} setSidebarShow={setSidebarShow} />
                            <div className="content-Wrapper" >
                                <Component setTitle={setTitle} sidebarShow={sidebarShow} />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
  </div>*/
  }
};

//return WithHeaderComp

export default withHeader;
