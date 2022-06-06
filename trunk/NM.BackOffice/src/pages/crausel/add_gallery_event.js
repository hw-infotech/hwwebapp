import Imageuploader from "../../components/imageUploader";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "../../components/commoninputfield";
import { ErrorMessage, Field, Formik } from "formik";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";;



const Add_Gallery_Event = () => {
    ///useEffect(() => {
    //  setTitle("Add Gallery Event")
    // }, [])
    //var b = `${<span style={{ color: "Blue" }}>"Gallery"</span>}`
    const route = [
        { name: "Home", route: "/" },
        { name: "Crausel", route: "/" },
        { name: "Gallery", route: "/" },

    ]
    return (
        <div title={"Gallery"}>
            <BasicBreadcrumbs route={route} />
            <div className="content_center margin_bottom_ w-100">
                <div className="gallery_page-box w-100">
                    <div className="innerContainer w-100 ">
                        <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                            {() => (
                                <form >
                                    <div className="font_size w-100 topGapPad boxshadow">
                                        <h4>Add Gallery Event</h4>
                                        <div className="d-flex w-100 ">
                                            <div className="w-100 spaces_between">
                                                <div className="form-group">
                                                    <Input type='text' className="form-control" placeholder='Event Name' name='eventname' label={"Event Name"} id="name" />
                                                </div>
                                                <div className="form-group">
                                                    <Input type='text' className="form-control" placeholder='Event Description' name='eventdescription' label={"Event Description"} id="name" />
                                                </div>
                                            </div>
                                            <div className="w-100 spaces_between">
                                                <div className="form-group">
                                                    <label>Event Date</label>
                                                    <Field type="date" className="form-control" name="eventdate" />
                                                    <ErrorMessage component="div" className="text-danger" name="eventdate" />
                                                </div>
                                                <div class="custom-file form-group">
                                                    <label class="form-label" for="customFile">Chose Audio for Event</label>
                                                    <input type="file" class="form-control" id="customFile" />
                                                </div>
                                            </div>
                                        </div>
                                        <Imageuploader />
                                        <div className="pt-3 " style={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
                                            <button type="button" class="btn btn-outline-secondary ">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Add_Gallery_Event