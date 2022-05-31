import React, { useEffect } from "react";
import Layout from "../../components/layout";
import Header from "../../Parts/header/Header";
import { admin } from "../../data/Data";
import { Pagination } from "@material-ui/lab";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { ErrorMessage, Formik } from "formik";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import withHeader from "../../HOC/withHeader";

const route = [
    { name: "Home", route: "/" },
    { name: "Carousel", route: "/" },
    { name: "Success-Stories", route: "/" },

]
const Success_Stories = () => {
    //useEffect(() => {
    //setTitle("Success Stories")
    //  }, [])
    return (
        <div title="Success Stories">
            <BasicBreadcrumbs route={route} />
            <div className="margin_bottom_ topGapPad">
                <div className="row font_size">
                    <div className="col-md-5">
                        <div className="cardBoard">
                            <h3>Add a New Project</h3>
                            <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                {() => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                    >
                                        <div class="form-group">
                                            <Input type="text" label="Project Title" className="form-control" name="storytitle" placeholder="Enter the Project title" />
                                        </div>
                                        <div class="form-group">
                                            <Input as={"textarea"} className="form-control" name="content_story" id="exampleFormControlTextarea1" rows="3" label={"Enter the Content"} />
                                        </div>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                            </div>
                                            <div class="custom-file form-group">
                                                <input type="file" class="custom-file-input" id="inputGroupFile01"
                                                    aria-describedby="inputGroupFileAddon01" name="storyImage" />
                                                <label class="custom-file-label" for="inputGroupFile01">Choose Image for Stories</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div style={{float:"right",}}>
                                            <button type="submit" class="addbtn">Add</button>
                                        </div>
                                        <div class="custom-control custom-switch" style={{ paddingTop: 5 }}>
                                            <input type="checkbox" class="custom-control-input" id="customSwitch1" name="activestory" />
                                            <label class="custom-control-label" for="customSwitch1">Acitve Stories</label>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                        <div className="pt-3">
                            <select class="form-select w-25">
                                <option disabled selected>Rows</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="cardBoard">
                            <h3>List of Projects</h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-6 col-md-6">

                            </div>
                            <div className="col-sm-6 col-lg-6 col-md-6">
                                <div className="gapPad pagination_justify_end">
                                    <Pagination
                                        className="paginationDiv"
                                        count={5}
                                        color="primary" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );


}
export default Success_Stories