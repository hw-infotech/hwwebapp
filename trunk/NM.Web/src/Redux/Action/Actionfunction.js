import axios from "axios"
import { API_URL, CONTACT_US_REGISTER_USER, EXAMPLE, MSQL_API_URL, REGISTER_APP_DESIGN_USER, REGISTER_GRAPHIC_DESIGN_USER, REGISTER_SEO_DESIGN_USER, REGISTER_UIUX_DESIGN_USER, REGISTER_WEB_DESIGN_USER, SUBSCRIBE_NEWSLETTER } from "../Store/Types"
import { ToastContainer, toast } from 'react-toastify';
import swal from "sweetalert";

export const tryRedux = () => dispatch => {
    dispatch({ type: EXAMPLE, payload: "Hello Everyone" })
}
export const graphicDesignuserRegister = (user) => dispatch => {
    axios.post(`${API_URL}graphic/register`, user)
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
    axios.post(`${API_URL}uiux/register`, user)
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
    axios.post(`${API_URL}seo/register`, user)
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
    axios.post(`${API_URL}web/register`, user)
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
    axios.post(`${API_URL}app/register`, user)
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
    axios.post(`${API_URL}contactus/register`, user)
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
    axios.post(`${MSQL_API_URL}api/NewsLetterController/Subscribe`, value, { headers })
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