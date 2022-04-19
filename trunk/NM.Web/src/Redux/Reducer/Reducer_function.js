import { CONTACT_US_REGISTER_USER, EXAMPLE, RESUME_CREATE, GET_ALL_SUBSCRIBERS, REGISTER_APP_DESIGN_USER, REGISTER_GRAPHIC_DESIGN_USER, REGISTER_SEO_DESIGN_USER, REGISTER_UIUX_DESIGN_USER, REGISTER_WEB_DESIGN_USER, SUBSCRIBE_NEWSLETTER } from "../Store/Types"

const initialState = {
    data: "",
    graphic_design_register: "",
    App_User_register: "",
    Web_User_register: "",
    Seo_User_register: "",
    UIUX_User_register: "",
    contactUsUser: "",
    subscribe: "",
    resume_create: ""
}
const Reducer_Function = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case EXAMPLE: {
            return {
                ...state,
                data: payload
            }
        }
        case REGISTER_GRAPHIC_DESIGN_USER: {
            return {
                ...state, graphic_design_register: payload
            }
        }
        case REGISTER_UIUX_DESIGN_USER: {
            return {
                ...state, UIUX_User_register: payload
            }
        }
        case REGISTER_SEO_DESIGN_USER: {
            return {
                ...state, Seo_User_register: payload
            }
        }
        case REGISTER_WEB_DESIGN_USER: {
            return {
                ...state, Web_User_register: payload
            }
        }
        case REGISTER_APP_DESIGN_USER: {
            return {
                ...state, App_User_register: payload
            }
        }
        case CONTACT_US_REGISTER_USER: {
            return {
                ...state, contactUsUser: payload
            }
        }
        case SUBSCRIBE_NEWSLETTER: {
            return {
                ...state, subscribe: payload
            }
        }
        case GET_ALL_SUBSCRIBERS: {
            return {
                ...state,
                allSubscribers: payload
            }
        }

        case RESUME_CREATE: {
            return {
                ...state,
                resume_create: payload

            }

        }
        default: {
            return state
        }
    }
}

export default Reducer_Function