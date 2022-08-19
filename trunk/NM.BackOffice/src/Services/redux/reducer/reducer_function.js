import React from "react";
import {
  ADD_GALLERY_EVENT,
  UPDATE,
  ADD_NEW_BLOG,
  ADD_SUCCESS_STORIES,
  CONDITIONS,
  EDIT_DATA,
  GET_ALL_BlOG,
  GET_ALL_ENQUIRY,
  GET_NEWSLEETER_SUBSCRIBER,
  GET_NEWSLEETER_UNSUBSCRIBER,
  GET_PENDING_ENQUIRY,
  GET_RESOLVED_ENQUIRY,
  POST_DATA,
  STACK,
  UPDATE_PROFILE,
  GET_PROFILE_DATA,
  UPDATE_PROFILE_PASSWORD,
  GET_PROFILE_PASSWORD,
  EDIT_PROFILE_DATA,
} from "../store/type";

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
  edit_profile_data: "",
  edit_data: [],
  profile_data: {
    name: "Ganesh",
    phone: 9803836866,
    email: "ganeshsharma5073@gmail.com",
    location: "Mohali",
    image: "/assets/images/shi.jpg",
    username: "Ganesh",
    profile_password: "6464564",
  },

  allEnquries: [
    {
      jobtitle: "UI/UX",
      description: "We are looking for an experienced Strategy Manager. ",
      functions: "Supervise and manage department team ",
      responsibility: [
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
      ],
      benefits: [{ value: "Insurance", label: "Insurance" }],
      requirment: [{ value: "Post Graduate", label: " Post Graduate" }],
      industry: "Technology",
      level: "Junior",
      type: "Part time",
      active: "active",
    },
    {
      jobtitle: "Project Manager",
      description: "Develop methods for motivating and inspiring stakeholders.",
      functions: "Provide support and training to team members",
      responsibility: [
        {
          value: " Identify job duties relevant to the position",
          label: " Identify job duties relevant to the position",
        },
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
      ],
      benefits: [{ value: "Insurance", label: "Insurance" }],
      requirment: [{ value: "B.tech", label: "B.tech" }],
      industry: "Business",
      level: "Senior",
      type: "Full time",
      active: "deactive",
    },
    {
      jobtitle: "Project Manager",
      description: "Develop methods for motivating and inspiring stakeholders.",
      functions: "Report to directors and executive staff",
      responsibility: [
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
        {
          value: "Create detailed budgeting and forecasting quarterly reports",
          label: "Create detailed budgeting and forecasting quarterly reports",
        },
      ],
      benefits: [
        {
          value: "Let you enjoy some extra perks",
          label: "Let you enjoy some extra perks",
        },
      ],
      requirment: [{ value: "Graduate", label: "Graduate" }],
      industry: "Technology",
      level: "Senior",
      type: "Full time",
      active: "deactive",
    },
  ],
};
/**
 * @method Reducer_function
 * @description Reducer function accept the previous state and action and return the new state as well as object
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const Reducer_Function = (state = initialstate, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_GALLERY_EVENT: {
      return {
        ...state,
        addgalleryevent: payload,
      };
    }
    case ADD_NEW_BLOG: {
      return {
        ...state,
        addnewblog: payload,
      };
    }
    case ADD_SUCCESS_STORIES: {
      return {
        ...state,
        addSuccessStories: payload,
      };
    }
    case GET_ALL_BlOG: {
      return {
        ...state,
        getallblog: payload,
      };
    }
    case GET_NEWSLEETER_SUBSCRIBER: {
      return {
        ...state,
        getnewsletterunsubscriber: payload,
      };
    }
    case GET_NEWSLEETER_UNSUBSCRIBER: {
      return {
        ...state,
        getnewsletter: payload,
      };
    }
    case GET_PENDING_ENQUIRY: {
      return {
        ...state,
        getpendingenquiry: payload,
      };
    }
    case GET_RESOLVED_ENQUIRY: {
      return {
        ...state,
        getresolvedenquiry: payload,
      };
    }
    case GET_ALL_ENQUIRY: {
      return {
        ...state,
        getallenquiry: state.allEnquries,
      };
    }
    case POST_DATA: {
      return {
        ...state,
        getallenquiry: state.allEnquries.push(payload),
      };
    }

    case EDIT_DATA: {
      return {
        ...state,
        edit_data: payload,
      };
    }
    case UPDATE: {
      state.allEnquries[state.edit_data.index] = payload;
      return {
        ...state,
      };
    }
    case UPDATE_PROFILE: {
      state.profile_data = payload;
      return {
        ...state,
      };
    }
    case GET_PROFILE_DATA: {
      return {
        ...state,
        profile_data: state.profile_data,
      };
    }
    case UPDATE_PROFILE_PASSWORD: {
      state.profile_data.profile_password = payload;
      return {
        ...state,
      };
    }
    case GET_PROFILE_PASSWORD: {
      return {
        ...state,
        profile_password: state.profile_password,
      };
    }
    case EDIT_PROFILE_DATA: {
      return {
        ...state,
        edit_profile_data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default Reducer_Function;
