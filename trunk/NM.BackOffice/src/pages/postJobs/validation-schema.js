import React from 'react'
import * as yup from 'yup';

export const validationschemeaa = yup.object().shape({
    jobtitle: yup.string().required("Job title can not be blank"),
    jobdescription: yup.string().required("Job Description can not be blank"),
    location: yup.string().required("Location must be selected"),
    responsibility: yup.string().required("Responsiblity cannt be blank"),
    requirements: yup.string().required("Job Requirements cannt be blank"),
    industries: yup.string().required("industries cannt be blank"),
    benefits: yup.string().required("Benefits cannt be blank"),
    senoritylevel: yup.string().required("Please Select Senority Level"),
    employementtype: yup.string().required("Employement cannt be blank"),
    jobfunction: yup.string().required("jobfunction cannt be blank"),
    //success story validation
    content_story: yup.string().required("Content field can not empty"),
    storytitle: yup.string().required("Story title can not blank"),
    storyImage: yup.string().required("Story image can not blank"),
    icontitle: yup.string().required("Icon title can not blank"),
    eventname: yup.string().required("Event name Can not be blank"),
    eventdescription: yup.string().required("Event Description can not be empty"),
    eventdate: yup.date().required()

})
export const initialValues = {
    jobtitle: "",
    jobdescription: "",
    location: "",
    responsibility: "",
    requirements: "",
    industries: "",
    benefits: "",
    senoritylevel: "",
    employementtype: "",
    jobfunction: "",
    content_story: "",
    storytitle: "",
    storyImage: "",
    icontitlle: "",
    eventname: "",
    eventdescription: "",
    eventdate: ""
}



