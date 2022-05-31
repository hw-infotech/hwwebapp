import React from "react";
import { ADD_GALLERY_EVENT, ADD_NEW_BLOG, ADD_SUCCESS_STORIES, GET_ALL_BlOG, GET_ALL_ENQUIRY, GET_NEWSLEETER_SUBSCRIBER, GET_NEWSLEETER_UNSUBSCRIBER, GET_PENDING_ENQUIRY, GET_RESOLVED_ENQUIRY, STACK } from "../../store/type";
import apidata from "../../store/api";
import { ToastContainer, toast } from 'react-toastify';
import Store from "../../store/store";

export const Add_Gallery_Eventt = (user) => dispatch => {
    // apidata.post(``, user)
    //     .then(res => {
    //         dispatch({ type: ADD_GALLERY_EVENT, payload: res.data })
    //     })
    //     .catch(err => {
    //         dispatch({ type: ADD_GALLERY_EVENT, payload: { data: false, err } })
    //     })
}
export const News_letter_Subscribe = () => dispatch => {
   
    // console.log("this newsletter",process.env.REACT_API_URL+"api/NewsLetter/getAll")
    apidata.get(`NewsLetter/getAll`)
        .then(res => {
            dispatch({ 
                type: GET_NEWSLEETER_SUBSCRIBER, 
                payload: res.data 
            })
        })
        .catch(err => {
            dispatch({ type: GET_NEWSLEETER_SUBSCRIBER, payload: { data: false, err } })
        })

}
export const NewsLetter_Unsubscriber = (data1) => dispatch => {
    apidata.get(`NewsLetter/UnSubscribe`, data1)
        .then(res => {
            dispatch({ type: GET_NEWSLEETER_UNSUBSCRIBER, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_NEWSLEETER_UNSUBSCRIBER, payload: { data: false, err } })
        }
        )
}