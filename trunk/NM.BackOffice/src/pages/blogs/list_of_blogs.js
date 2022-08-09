import React, { useEffect, useState } from "react";
//import Pagination from '@material-ui/lab/Pagination';
import BasicBreadcrumbs from "../../components/breadcumbs";
import Layout from "../../components/layout";
import withHeader from "../../HOC/withHeader";

const List_Of_Blogs = () => {
    // useEffect(() => {
    //   setTitle("List of Blogs")
    // }, [])
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })
    const [showPerPage, setShowPerPage] = useState(10)
    const [next, setNext] = useState(0)
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        })
    useEffect(() => {
        //setnewsletter-subscriberss(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
        setpagination({ start: start, end: showPerPage })
    }, [ pagination1])
    const Chnage = (e) => {
        const { name, value } = e.target
        setRow(value)
        console.log("this is the select field value", value)
    }
    const handlechange = (event, value) => {
        var value1;
        setNext(value)
        //console.log(value, "comp", next)
        if (next <= value) {
            value1 = row * value
            setShowPerPage(value1)
            console.log("this is the if conditon", value, showPerPage, state.row_value)
            setStart(value1 - row)
            setpagination({ start: start, end: showPerPage })
        }
        else {
            console.log("else", start, showPerPage)
            setStart(start - row)
            setShowPerPage(showPerPage - row)
            setpagination({ start: start - row, end: showPerPage - row })
        }
    }
    const route = [
        { name: "Home", route: "/" },
        { name: "Blog", route: "/" },
        { name: "List of Blogs", route: "/" },

    ]
    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <div classNameName="topPadding-10">
                <div classNameName="boxshadow">
                    <h4>List of Blogs</h4>
                    <table classNameName="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">images</th>
                                <th scope="col">Music</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo.jpg</td>
                                <td className="action "><div className="userDetail ">

                                    <button type="button" className="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="actionIcon"> <i
                                            className="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul className="IconDropdown dropdown-menu context-menu1"
                                        aria-labelledby="dropdownIconMenu">
                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="editAction" data-bs-toggle="modal"
                                                    data-bs-target="#editbtn"><i
                                                        className="bi bi-pencil-square"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fa_13">Edit</button>
                                            </div>
                                        </li>

                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="viewIcon" data-bs-toggle="modal"
                                                    data-bs-target="#viewbtn"> <i
                                                        className="bi bi-eye"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13" >Update</button>

                                            </div>
                                        </li>

                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="deleteAction" data-bs-toggle="modal"
                                                    data-bs-target="#deletebtn"> <i
                                                        className="bi bi-trash3-fill"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13">Deletes</button>

                                            </div>
                                        </li>
                                    </ul>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td className="action "><div className="userDetail ">

                                    <button type="button" className="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="actionIcon"> <i
                                            className="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul classNameName="IconDropdown dropdown-menu context-menu1"
                                        aria-labelledby="dropdownIconMenu">
                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="editAction" data-bs-toggle="modal"
                                                    data-bs-target="#editbtn"><i
                                                        className="bi bi-pencil-square"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13">Edit</button>
                                            </div>
                                        </li>

                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="viewIcon" data-bs-toggle="modal"
                                                    data-bs-target="#viewbtn"> <i
                                                        className="bi bi-eye"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13" >Update</button>

                                            </div>
                                        </li>

                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="deleteAction" data-bs-toggle="modal"
                                                    data-bs-target="#deletebtn"> <i
                                                        className="bi bi-trash3-fill"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13">Deletes</button>

                                            </div>
                                        </li>
                                    </ul>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td className="action "><div className="userDetail ">

                                    <button type="button" className="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="actionIcon"> <i
                                            className="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul className="IconDropdown dropdown-menu context-menu1"
                                        aria-labelledby="dropdownIconMenu">
                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="editAction" data-bs-toggle="modal"
                                                    data-bs-target="#editbtn"><i
                                                        className="bi bi-pencil-square"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13">Edit</button>
                                            </div>
                                        </li>

                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="viewIcon" data-bs-toggle="modal"
                                                    data-bs-target="#viewbtn"> <i
                                                        className="bi bi-eye"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13" >Update</button>

                                            </div>
                                        </li>

                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="deleteAction" data-bs-toggle="modal"
                                                    data-bs-target="#deletebtn"> <i
                                                        className="bi bi-trash3-fill"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13">Delete</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div classNameName="row padd_bottm">
                <div classNameName="col-sm-6 col-lg-6 col-md-6">
                    <div classNameName="padding-30">
                        <select className="form-select w-25 " name={state.row_value} onChange={Chnage}>
                            <option disabled selected>Rows</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
                <div classNameName="col-sm-6 col-lg-6 col-md-6 ">
                    <div classNameName="padding-30 pagination_justify_end ">
                        {/*<Pagination
                            classNameName="paginationDiv"
                            count={5}
                            onChange={handlechange}
    color="primary" />*/}
                    </div>
                </div>
            </div>
               
            </div>
           
        </div>
    );

}
export default List_Of_Blogs