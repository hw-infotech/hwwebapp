import { Field, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { Input } from '../../components/commoninputfield'
import Layout from "../../components/layout";
import { initialValues, validationschemeaa } from "./validation-schema";
const Post_New_Job = () => {
    const [requirment2, setRequirments] = useState([])
    const [responsibility, setResponsibility] = useState([])
    const [benefits, Setbenefits] = useState([])
    const [formValues, setFormValues] = useState([])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);

    }
    let handleChangereq = (i, e) => {
        let requirment1 = [...requirment2]
        requirment2[i][e.target.name] = e.target.value
        setRequirments(requirment1)

    }
    let handleChangebenefits = (i, e) => {
        let benefits1 = [...benefits]
        benefits[i][e.target.name] = e.target.value
        Setbenefits(benefits1)

    }

    let addFormFields = () => {
        setFormValues([...formValues, { responsibility: "" }])
    }
    const addrequirementt = () => {
        setRequirments([...requirment2, { requirements: "" }])
    }
    const addbenefits = () => {
        Setbenefits([...benefits, { benefits: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    let removeFormFieldbeefits = (i) => {
        let resns = [...benefits];
        resns.splice(i, 1);
        setResponsibility(resns)
    }
    let removeFormFieldsreq = (i) => {
        let requirment = [...requirment2]
        requirment.splice(i, 1);
        setRequirments(requirment)

    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    //useEffect(() => {
    // setTitle("Post New Job")
    //}, [])
    // const onhandchange = (e) => {
    //     const { name, value } = e.target
    //     setState([...state, { name: [value] }])
    //     console.log(state);
    //     // setState1((array) => [...array, state])
    //     //meal.Dishes=state.Dishes
    // }
    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Post a New Job", route: "/" },
    ]
    return (
        <div >
            <BasicBreadcrumbs route={route} />
            <div className="content_center margin_bottom_" >
                <div className="topGapPad p-3 w-75">
                    <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                        {() => (
                            <form onSubmit={(e) => {
                                e.preventDefault()
                            }}>
                                <div className="boxshadow ">
                                    <h4>Post a New Job</h4>
                                    <div className="content_center">
                                        <div className="add_new_post_padding_between_field w-100">
                                            <div class="form-group">
                                                <Input as='select' className="form-control" name='jobtitle' label={"Job title"} id="name" options={[
                                                    { value: ".." },
                                                    { value: "one" },
                                                    { value: "two" },
                                                    { value: "three" },
                                                ]} >
                                                </Input>
                                            </div>
                                            <div className="form-group">
                                                <label>Enter Description</label>
                                                <textarea className="form-control" placeholder='Job Description' name='jobdescription' label={"Job Description"} id="name" />
                                            </div>
                                            <div className="form-group">
                                                <Input type='text' className="form-control" placeholder='Job Function' name='jobfunction' label={"Job Function"} id="name" />
                                            </div>
                                            <div className="form-group">
                                                <Input as='select' className="form-control" placeholder="Location" name='location' label={"Location"} id="name" options={[
                                                    { name: "...." },
                                                    { value: "one" },
                                                    { value: "two" },
                                                    { value: "three" },
                                                ]} ></Input>
                                            </div>
                                            <div className="form-group formGroup">
                                                <Input
                                                    type='text'
                                                    className="form-control"
                                                    placeholder='Responsibility'
                                                    name='responsibility'
                                                    label={"Responsibility"}
                                                />
                                            </div>
                                        </div>
                                        <div className="add_new_post_padding_between_field w-100">
                                            <div className="form-group  formGroup">
                                                <Input
                                                    type='text'
                                                    className="form-control post_new_job_calcultextfield"
                                                    placeholder='Requirments'
                                                    name='requirements'
                                                    label={"Requirments"}
                                                // id="requirements"
                                                />                                             
                                            </div>    
                                            <div className="form-group ">
                                                <Input type='text' className="form-control" placeholder='Industries' name='industries' label={"Industries"} id="name" />
                                            </div>
                                            <div className="form-group formGroup">
                                                <Input type='text'
                                                    className="form-control"
                                                    placeholder="Benefits"
                                                    name='benefits'
                                                    label={"Benefits"}
                                                    id="name"

                                                />
                                                {/*<button type="submit" class="btn btn-outline-secondary post_new_job_add_morefield_button" onClick={() => {
                                                    addbenefits()
                                                }}>+</button>*/}
                                            </div>                                      
                                            <div className="form-group">
                                                <Input as='select' className="form-control" placeholder="Senority Level" name='senoritylevel' label={"Senority Level"} id="name" options={[
                                                    { value: "" },
                                                    { value: "one" },
                                                    { value: "two" },
                                                    { value: "three" },
                                                ]} ></Input>
                                            </div>
                                            <div className="form-group">
                                                <Input as='select' className="form-control" placeholder="Employement type" name='employementtype' label={"Employement type"} id="name" options={[
                                                    { value: "...." },
                                                    { value: "one" },
                                                    { value: "two" },
                                                    { value: "three" },
                                                ]} ></Input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justyfycontentright">
                                        <button type="submit" className="btn btn-primary ">Submit</button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default Post_New_Job