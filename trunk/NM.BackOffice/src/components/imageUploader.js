import React, { useEffect, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { ErrorMessage } from "formik";
//import Input from "../components/input";

const Imageuploader = ({
    values,
    index,
    listIndex,
    myList,
    setmyList,
    variantImg
}) => {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' }
    }

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <div className="dropzone">
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
            />
        </div>
    );

}
export default Imageuploader;