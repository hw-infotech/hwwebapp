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
  GET_ENQUIRY,
  ADD_ENQUIRY,
  UPDATE_ENQUIRY,
  EDIT_ENQUIRY,
  LOGIN,
  DELETE_JOB,
  GET_JOB_DATA,
  BENEFITS,
  REQUIRMENT,
  RESPONSIBILITY,
} from "../store/type";

const initialstate = {
  login: "",
  benefits:"",
  requirment:"",
  responsibility:"",
  addjobdata:"",
  getenquiry: "",
  job_list: [],
  getnewsletter: "",
  getnewsletterall: [],
  edit_profile_data: "",
  edit_data: [],
  edit_enquiry: [],
  profile_data: {
    name: "Ganesh",
    phone: 9803836866,
    email: "ganeshsharma5073@gmail.com",
    location: "Mohali",
    image: "/assets/images/shi.jpg",
    username: "Ganesh",
    profile_password: "6464564",
  },

  allEnquries: [],
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
    case LOGIN: {
      return {
        ...state,
        login: payload,
      };
    }
    case GET_ENQUIRY: {
      return {
        ...state,
        getenquiry: payload,
      };
    }
    case ADD_ENQUIRY: {
      return {
        ...state,
        getenquiry: payload,
      };
    }
    case EDIT_ENQUIRY: {
      return {
        ...state,
        edit_enquiry: payload,
      };
    }
    case UPDATE_ENQUIRY: {
      // console.log(payload, "payload");
      //state.getenquiry.data.message = state.edit_enquiry.data.message;
      // const temp= state.getenquiry.data?.map(function (item) {
      //   return item.bsonId == payload.data.bsonId
      //     ? payload
      //     : item;
      // });
      // state.getenquiry=temp
      return {
        ...state,
      };
    }
    case ADD_SUCCESS_STORIES: {
      return {
        ...state,
        addSuccessStories: payload,
      };
    }

    case GET_NEWSLEETER_SUBSCRIBER: {
      return {
        ...state,
        getnewsletterall: payload,
      };
    }
    case GET_NEWSLEETER_UNSUBSCRIBER: {
      return {
        ...state,
        getnewsletter: payload,
      };
    }

    case BENEFITS: {
      return {
        ...state,
        benefits: payload,
      };
    }
    case REQUIRMENT: {
      return {
        ...state,
        requirment: payload,
      };
    }
    case RESPONSIBILITY: {
      return {
        ...state,
        responsibility: payload,
      };
    }
    case DELETE_JOB: {
      return {
        ...state,
        job_list: payload,
      };
    }
    case GET_JOB_DATA: {
      return {
        ...state,
        job_list: payload,
      };
    }
    case POST_DATA: {
      return {
        ...state,
        job_list: state.job_list.push(payload),
      };
    }
    case EDIT_DATA: {
      return {
        ...state,
        edit_data: payload,
      };
    }
    case UPDATE: {
      var temp = state.data.map(function (item) {
        return item.id == action.payload.id ? action.payload : item;
      });
      state.job_list[state.edit_data.index] = payload;
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
