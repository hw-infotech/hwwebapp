import React from "react";
import { ADD_GALLERY_EVENT, ADD_NEW_BLOG, ADD_SUCCESS_STORIES, GET_ALL_BlOG, GET_ALL_ENQUIRY, GET_NEWSLEETER_SUBSCRIBER, GET_NEWSLEETER_UNSUBSCRIBER, GET_PENDING_ENQUIRY, GET_RESOLVED_ENQUIRY, POST_DATA, STACK } from "../../store/type";

const initialstate = {
    addgalleryevent: "",
    addnewblog: "",
    addSuccessStories: "",
    getallblog: "",
    getallenquiry: "",
    getnewsletter: "",
    getnewsletterunsubscriber: [],
    getpendingenquiry: "",
    getresolvedenquiry: "",
    stack: "",

    allEnquries: [
        {
            jobtitle: "UI/UX",
            description: "We are looking for an experienced Strategy Manager. ",
            functions: "Supervise and manage department team ",
            responsibility: [],
            benfits: [],
            requirment: [],
            industry: "",
            level: "Junior",
            type: "Part time",
            active: "pending"

        },
        {
            jobtitle: "Project Manager",
            description: "Develop methods for motivating and inspiring stakeholders.",
            functions: "Provide support and training to team members",
            responsibility: [],
            benfits: [],
            requirment: [],
            industry: "",
            level: "Senior",
            type: "Full time",
            active: "pending"
        },
        {
            Jobtitle: "Project Manager",
            description: "Develop methods for motivating and inspiring stakeholders.",
            functions: "Report to directors and executive staff",
            responsibility: [],
            benfits: [],
            requirment: [],
            industry: "",
            level: "Senior",
            type: "Full time",
            active: "pending"
        }
    ]
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
                addSuccessStories: payload
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
                getallenquiry: state.allEnquries
            }
        }
        case POST_DATA: {
            return {
                ...state,
                getallenquiry: state.allEnquries.push(payload)
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