import axios from "axios"
import { API_URL, CONTACT_US_REGISTER_USER, EXAMPLE, GET_ALL_SUBSCRIBERS, MSQL_API_URL, REGISTER_APP_DESIGN_USER, REGISTER_GRAPHIC_DESIGN_USER, REGISTER_SEO_DESIGN_USER, REGISTER_UIUX_DESIGN_USER, REGISTER_WEB_DESIGN_USER, SUBSCRIBE_NEWSLETTER } from "../Store/Types"
import { ToastContainer, toast } from 'react-toastify';
import swal from "sweetalert";
import api from "../../services/api";

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

export const contactUSRegister = (user) => dispatch => {
    api.post(`contactus/register`, user)
        .then(res => {
            dispatch({ type: CONTACT_US_REGISTER_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: CONTACT_US_REGISTER_USER, payload: { data: false, err } })
            const notify = () => toast.success(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
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