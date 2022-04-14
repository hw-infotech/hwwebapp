import axios from "axios"
import { API_URL, CONTACT_US_REGISTER_USER, EXAMPLE, MSQL_API_URL, REGISTER_APP_DESIGN_USER, REGISTER_GRAPHIC_DESIGN_USER, REGISTER_SEO_DESIGN_USER, REGISTER_UIUX_DESIGN_USER, REGISTER_WEB_DESIGN_USER, SUBSCRIBE_NEWSLETTER, RESUME_CREATE } from "../Store/Types"
import { ToastContainer, toast } from 'react-toastify';
import swal from "sweetalert";
import apidata from "../Store/api";

export const tryRedux = () => dispatch => {
    dispatch({ type: EXAMPLE, payload: "Hello Everyone" })
}
export const graphicDesignuserRegister = (user) => dispatch => {
    apidata.post(`graphic/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_GRAPHIC_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_GRAPHIC_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.error(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const UIUXuserRegister = (user) => dispatch => {
    apidata.post(`uiux/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_UIUX_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_UIUX_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.error(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const SEOuserRegister = (user) => dispatch => {
    apidata.post(`seo/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_SEO_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_SEO_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.error(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const WebuserRegister = (user) => dispatch => {
    apidata.post(`web/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_WEB_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_WEB_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.error(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const AppuserRegister = (user) => dispatch => {
    apidata.post(`app/register`, user)
        .then(res => {
            dispatch({ type: REGISTER_APP_DESIGN_USER, payload: res.data })
            const notify = () => toast.success(`${res.data.data}`);//, { theme: "colored" }
            notify()

        })
        .catch(err => {
            dispatch({ type: REGISTER_APP_DESIGN_USER, payload: { data: false, err } })
            const notify = () => toast.error(`${err.response.data.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const contactUSRegister = (user) => dispatch => {
    apidata.post(`Contact/create`, user)
        .then(res => {
            dispatch({ type: CONTACT_US_REGISTER_USER, payload: res?.data })
            if (res.data.success) {
                const notify = () => toast.success("Thank you for contacting us, we will respond you as quickly as possible.");//, { theme: "colored" }
                notify()
            }
            else {
                const notify = () => toast.error(res.data.message);//, { theme: "colored" }
                notify()
            }
        })

        .catch(err => {
            console.log(err);
            dispatch({ type: CONTACT_US_REGISTER_USER, payload: { data: false, err } })
            const notify = () => toast.error(`${err?.response?.data?.error}`);//, { theme: "colored" }
            console.log("err ", err);
            notify()
        })
}

export const subscribeNewsletter = (email) => dispatch => {
    const value = { Email: email, IsSubscribe: true }
    const headers = { 'Content-Type': 'application/json' }
    apidata.post(`NewsLetter/Subscribe`, value, { headers })
        .then(response => {
            dispatch({
                type: SUBSCRIBE_NEWSLETTER,
                payload: response.data
            })
            if (response.data.success) {
                const notify = () => toast.success(`Success`);//, { theme: "colored" }
                notify()
            }
            else {
                const notify = () => toast.error(response.data.message);//, { theme: "colored" }
                notify()
            }
        })
        .catch(err => {
            dispatch({
                type: SUBSCRIBE_NEWSLETTER,
                payload: { data: null, err }
            })
        })
}
export const createResume = (resume) => dispatch => {
    
    apidata.post('Resume/create', resume)
        .then(res => {
            dispatch({ type: RESUME_CREATE, payload: res.data })
            console.log("this is",res)
            const notify = () => toast.success('Thank you for contacting us, we will respond you as quickly as possible.');//, { theme: "colored" }
            notify()
        })
        .catch(err => {
            dispatch({ type: RESUME_CREATE, payload: { data: false, err } })
            const notify = () => toast.error(err?.response?.data?.error);//, { theme: "colored" }
            notify()

        })
}