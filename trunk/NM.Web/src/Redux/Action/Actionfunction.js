import axios from "axios"
import { API_URL, CONTACT_US_REGISTER_USER, EXAMPLE, GET_ALL_SUBSCRIBERS, MSQL_API_URL, REGISTER_APP_DESIGN_USER, REGISTER_GRAPHIC_DESIGN_USER, REGISTER_SEO_DESIGN_USER, REGISTER_UIUX_DESIGN_USER, REGISTER_WEB_DESIGN_USER, SUBSCRIBE_NEWSLETTER } from "../Store/Types"
import { ToastContainer, toast } from 'react-toastify';
import swal from "sweetalert";
import api from "../../services/api";
//import '../../../src/toast.scss'
import { css } from "@emotion/react";
import { color } from "@mui/system";

export const tryRedux = () => dispatch => {
    dispatch({ type: EXAMPLE, payload: "Hello Everyone" })
}

export const graphicDesignuserRegister = (user) => dispatch => {
    api.post(`graphic/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_GRAPHIC_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_GRAPHIC_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.success(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const UIUXuserRegister = (user) => dispatch => {
    api.post(`uiux/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_UIUX_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_UIUX_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.success(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const SEOuserRegister = (user) => dispatch => {
    api.post(`seo/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_SEO_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_SEO_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.success(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const WebuserRegister = (user) => dispatch => {
    api.post(`web/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_WEB_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_WEB_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.success(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const AppuserRegister = (user) => dispatch => {
    api.post(`app/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_APP_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_APP_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.success(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const contactUSRegister = (user, setServices) => dispatch => {
    // console.log(user);
    api.post(`api/Contact/create`, user)
        .then(res => {
            dispatch({ type: CONTACT_US_REGISTER_USER, payload: res.data })
            //const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            console.log("this the toast fy method", res.data)


            // notify()
            if (res.data.success) {
                toast.success('Submitted Sucessfull', {
                    position: "bottom-center",
                    autoClose: 5000,
                    progress: undefined,
                    hideProgressBar: false.valueOf,
                    
                });
                //swal({
                // text: "Your message has been successfully delivered",
                //icon: "success",
                //title: "Success"
                // })
            }
            else {
               
                // swal({
                // text: res.data.message,
                //icon: "error",
                //title: "Failed"
                // })
            }
            setServices({
                "website": false,
                "mobile": false,
                "illustrations": false,
                "front-end": false,
                "content": false,
                "animation": false
            })
        })
        .catch(err => {
            toast.error('Something Went wrong', {
                position: "bottom-center",
                autoClose: 5000,
                //icon:  <img src="assets/img/blogBanners/error.png"/>
                //className:'toastify__toast-theme--colored.Toastify__toast--error',
                //toastClassName: "Toastify__toast"
            });
            console.log("this the toast fy method", err)


            // console.log("err ", err);
            // // notify()
        })
}

export const subscribeNewsletter = (email) => dispatch => {
    const value = { Email: email, IsSubscribe: true }
    const headers = { 'Content-Type': 'application/json' }
    api.post(`api/NewsLetterController/Subscribe`, value, { headers })
        .then(response => {
            dispatch({
                type: SUBSCRIBE_NEWSLETTER,
                payload: response.data
            })
            if (response.data.success) {
                swal({
                    text: "Subscribed successfully",
                    icon: "success",
                    title: "Success"
                })
            }
            else {
                swal({
                    text: response.data.message,
                    icon: "error",
                    title: "Failed"
                })
            }
        })
        .catch(err => {
            dispatch({
                type: SUBSCRIBE_NEWSLETTER,
                payload: { data: null, err }
            })
        })
}

export const getAllSubscriberData = () => dispatch => {
    api.get('api/NewsLetterController/getAll')
        .then((res) => {
            dispatch({
                type: GET_ALL_SUBSCRIBERS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: GET_ALL_SUBSCRIBERS,
                payload: {
                    data: null,
                    err
                }
            })
        })
}