import React from "react";
import { ADD_GALLERY_EVENT, UPDATE, ADD_NEW_BLOG, ADD_SUCCESS_STORIES, CONDITIONS, EDIT_DATA, GET_ALL_BlOG, GET_ALL_ENQUIRY, GET_NEWSLEETER_SUBSCRIBER, GET_NEWSLEETER_UNSUBSCRIBER, GET_PENDING_ENQUIRY, GET_RESOLVED_ENQUIRY, POST_DATA, STACK } from "../../store/type";

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
    edit_data: [],
    allEnquries: [
        {
            jobtitle: "UI/UX",
            description: "We are looking for an experienced Strategy Manager. ",
            functions: "Supervise and manage department team ",
            responsibility: [
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
               ],
            benefits: [  { value: 'Insurance', label: 'Insurance' }],
            requirment: [
                { value: 'Graduate', label: 'Graduate' },
               
            ],
            industry: "Technology",
            level: "Junior",
            type: "Part time",
            active: "active"

        },
        {
            jobtitle: "Project Manager",
            description: "Develop methods for motivating and inspiring stakeholders.",
            functions: "Provide support and training to team members",
            responsibility: [
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
               ],
            benefits: [  { value: 'Insurance', label: 'Insurance' }],
            requirment: [
                { value: 'Graduate', label: 'Graduate' },
             
            ],
            industry: "Technology",
            level: "Senior",
            type: "Full time",
            active: "deactive"
        },
        {
            Jobtitle: "Project Manager",
            description: "Develop methods for motivating and inspiring stakeholders.",
            functions: "Report to directors and executive staff",
            responsibility: [
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
                { value: 'Create detailed budgeting and forecasting quarterly reports', label: 'Create detailed budgeting and forecasting quarterly reports' },
               ],
            benefits: [  { value: 'Insurance', label: 'Insurance' }],
            requirment: [
                { value: 'Graduate', label: 'Graduate' },
               
            ],
            industry: "Technology",
            level: "Senior",
            type: "Full time",
            active: "deactive"
        },


    ]



}
const Reducer_Function = (state = initialstate, action) => {
    console.log(action, "this is the acton ")
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
        case EDIT_DATA: {
            return {
                ...state,
                edit_data: payload
            }
        }
        case UPDATE: {
            state.allEnquries[state.edit_data.index] = payload

         
            return {
                ...state,

            }
        }

        default: {
            return state
        }

    }
}
export default Reducer_Function