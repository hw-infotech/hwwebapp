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
            <div className="topGapPad">
                <div className="boxshadow">
                    <h4>List of Blogs</h4>
                    <table class="table">
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
                                <td class="action "><div class="userDetail ">

                                    <button type="button" class="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span class="actionIcon"> <i
                                            class="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul class="IconDropdown dropdown-menu context-menu1"
                                        aria-labelledby="dropdownIconMenu">
                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="editAction" data-bs-toggle="modal"
                                                    data-bs-target="#editbtn"><i
                                                        class="bi bi-pencil-square"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fa_13">Edit</button>
                                            </div>
                                        </li>

                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="viewIcon" data-bs-toggle="modal"
                                                    data-bs-target="#viewbtn"> <i
                                                        class="bi bi-eye"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13" >Update</button>

                                            </div>
                                        </li>

                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="deleteAction" data-bs-toggle="modal"
                                                    data-bs-target="#deletebtn"> <i
                                                        class="bi bi-trash3-fill"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13">Deletes</button>

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
                                <td class="action "><div class="userDetail ">

                                    <button type="button" class="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span class="actionIcon"> <i
                                            class="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul className="IconDropdown dropdown-menu context-menu1"
                                        aria-labelledby="dropdownIconMenu">
                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="editAction" data-bs-toggle="modal"
                                                    data-bs-target="#editbtn"><i
                                                        class="bi bi-pencil-square"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13">Edit</button>
                                            </div>
                                        </li>

                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="viewIcon" data-bs-toggle="modal"
                                                    data-bs-target="#viewbtn"> <i
                                                        class="bi bi-eye"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13" >Update</button>

                                            </div>
                                        </li>

                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="deleteAction" data-bs-toggle="modal"
                                                    data-bs-target="#deletebtn"> <i
                                                        class="bi bi-trash3-fill"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13">Deletes</button>

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
                                <td class="action "><div class="userDetail ">

                                    <button type="button" class="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span class="actionIcon"> <i
                                            class="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul class="IconDropdown dropdown-menu context-menu1"
                                        aria-labelledby="dropdownIconMenu">
                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="editAction" data-bs-toggle="modal"
                                                    data-bs-target="#editbtn"><i
                                                        class="bi bi-pencil-square"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13">Edit</button>
                                            </div>
                                        </li>

                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="viewIcon" data-bs-toggle="modal"
                                                    data-bs-target="#viewbtn"> <i
                                                        class="bi bi-eye"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13" >Update</button>

                                            </div>
                                        </li>

                                        <li class="dropdownList">
                                            <div class="actionBtns">
                                                <span class="deleteAction" data-bs-toggle="modal"
                                                    data-bs-target="#deletebtn"> <i
                                                        class="bi bi-trash3-fill"></i></span>
                                                <button type="button" className="btn btn-outlined-secondary fs_13">Delete</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row padd_bottm">
                <div className="col-sm-6 col-lg-6 col-md-6">
                    <div className="gapPad">
                        <select class="form-select w-25 " name={state.row_value} onChange={Chnage}>
                            <option disabled selected>Rows</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-6 col-md-6 ">
                    <div className="gapPad pagination_justify_end ">
                        {/*<Pagination
                            className="paginationDiv"
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