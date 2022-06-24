import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { Input } from "../../components/commoninputfield";
import Layout from "../../components/layout";
import withHeader from "../../HOC/withHeader";
//import Pagination from '@material-ui/lab/Pagination';
// import Pagination from '@mui/material/Pagination'
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";

const Stacks = () => {
    //useEffect(()=>{
    ////  setTitle("Stacks")
    //},[])
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
    }, [pagination1])
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
        { name: "Crausel", route: "/" },
        { name: "Stacks", route: "/" },
    ]
    return (
        <div title={"Stacks"}>
            <BasicBreadcrumbs route={route} />
            <div className="spaces-content d-flex margin_bottom_">
                <div className="w-100">
                    <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                        {() => (
                            <div className="h-100">

                                <div className="stacks_page_box boxshadow">
                                    <h4>Add Stack</h4>
                                    <form >
                                        <div className="form-group">
                                            <Input type='text' className="form-control" placeholder='Icon title' name='icontitle' label={"Icon title"} id="name" />
                                        </div>
                                        <div class="custom-file form-group">
                                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                                                aria-describedby="inputGroupFileAddon01" />
                                            <label class="custom-file-label" for="inputGroupFile01">Choose Image for Stacks</label>
                                        </div>

                                        <div className="stacks_button">
                                            <button type="button" class="btn btn-outline-secondary ">Submit</button>
                                            <button type="button" class="btn btn-outline-secondary ">Update</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="gapPad">
                                <select class="form-select w-25 " name={state.row_value} onChange={Chnage}>
                                    <option disabled selected>Rows</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className="w-100">
                    <div className="boxshadow h-100" >
                        <h4 >List Number of Stacks</h4>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Active/Deactive</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><button type="button" class="btn "><i class="fs-5 bi-pen"></i></button></td>
                                    <td><div class="custom-control custom-switch top_padding" style={{ textAlign: "center" }} >

                                        <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                        <label class="custom-control-label" for="customSwitch1"></label>

                                    </div></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><button type="button" class="btn "><i class="fs-5 bi-pen"></i></button></td>
                                    <td><div class="custom-control custom-switch top_padding " style={{ textAlign: "center" }}>
                                        <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                                        <label class="custom-control-label" for="customSwitch2"></label>
                                    </div></td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td><button type="button" class="btn "><i class="fs-5 bi-pen"></i></button></td>
                                    <td><div class="custom-control custom-switch top_padding" style={{ textAlign: "center" }}>
                                        <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                                        <label class="custom-control-label" for="customSwitch3"></label>
                                    </div></td>
                                </tr>
                            </tbody>
                        </table>
                      
                    </div>
                    <div className="gapPad pagination_justify_end ">
                    {/* <Pagination
                        className="paginationDiv"
                        count={5}
                        onChange={handlechange}
                        color="primary" /> */}
                </div>
                   
                </div>
              
            </div>
        </div>
    )

}
export default Stacks