import React from "react";
import { ADD_GALLERY_EVENT, ADD_NEW_BLOG, ADD_SUCCESS_STORIES, GET_ALL_BlOG, GET_ALL_ENQUIRY, GET_NEWSLEETER_SUBSCRIBER, GET_NEWSLEETER_UNSUBSCRIBER, GET_PENDING_ENQUIRY, GET_RESOLVED_ENQUIRY, STACK } from "../../store/type";

const initialstate = {
    addgalleryevent: "",
    addnewblog: "",
    addsuccessstories: "",
    getallblog: "",
    getallenquiry: "",
    getnewsletter: "",
    getnewsletterunsubscriber: [],
    getpendingenquiry: "",
    getresolvedenquiry: "",
    stack: ""
}
const Reducer_Function = (state = initialstate, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_GALLERY_EVENT: {
            return {
                ...state,
                addgalleryevent: payload
            }
        }
        case ADD_NEW_BLOG: {
            return {
                ...state,
                addnewblog: payload
            }
        }
        case ADD_SUCCESS_STORIES: {
            return {
                ...state,
                addsuccessstories: payload
            }
        }
        case GET_ALL_BlOG: {
            return {
                ...state,
                getallblog: payload
            }
        }
        case GET_NEWSLEETER_SUBSCRIBER: {
            return {
                ...state,
                getnewsletterunsubscriber: payload
            }
        }
        case GET_NEWSLEETER_UNSUBSCRIBER: {
            return {
                ...state,
                getnewsletter: payload

            }
        }
        case GET_PENDING_ENQUIRY: {
            return {
                ...state,
                getpendingenquiry: payload
            }
        }
        case GET_RESOLVED_ENQUIRY: {
            return {
                ...state,
                getresolvedenquiry: payload
            }
        }
        case GET_ALL_ENQUIRY: {
            return {
                ...state,
                getallenquiry: payload
            }
        }
        case STACK: {
            return {
                ...state,
                STACK: payload
            }
        }

        default: {
            return state
        }

    }
}
export default Reducer_Function