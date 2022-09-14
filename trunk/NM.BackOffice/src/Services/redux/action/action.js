import React from "react";
import {
  ADD_GALLERY_EVENT,
  ADD_NEW_BLOG,
  ADD_SUCCESS_STORIES,
  CONDITIONS,
  EDIT_DATA,
  EDIT_ENQUIRY,
  GET_ALL_BlOG,
  GET_ALL_ENQUIRY,
  GET_ENQUIRY,
  GET_NEWSLEETER_SUBSCRIBER,
  GET_NEWSLEETER_UNSUBSCRIBER,
  GET_PENDING_ENQUIRY,
  GET_PROFILE_DATA,
  GET_PROFILE_PASSWORD,
  GET_RESOLVED_ENQUIRY,
  POST_DATA,
  STACK,
  UPDATE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_PASSWORD,
  UPDATE_ENQUIRY,
  GET_NEWS_SUBSCRIBE,
  LOGIN,
} from "../../redux/store/type";
import apidata from "../../redux/store/api";
import { ToastContainer, toast } from "react-toastify";

export const Add_Gallery_Eventt = (user) => (dispatch) => {
  // apidata.post(``, user)
  //     .then(res => {
  //         dispatch({ type: ADD_GALLERY_EVENT, payload: res.data })
  //     })
  //     .catch(err => {
  //         dispatch({ type: ADD_GALLERY_EVENT, payload: { data: false, err } })
  //     })
};
/**
 * @method News_letter_Subscribe
 * @description in This function we hit the newsleeter api and get the data of all newsletter subscriber/unsubscriber
 * @returns
 */
export const News_letter_Subscribe_Unsubscribe = () => (dispatch) => {
  apidata
    .get(`NewsLetter/getAll`)
    .then((res) => {
      dispatch({
        type: GET_NEWSLEETER_SUBSCRIBER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_NEWSLEETER_SUBSCRIBER,
        payload: { data: false, err },
      });
    });
};
export const News_letter_Subscribe = () => (dispatch) => {
  apidata
    .get(`NewsLetter/Subscribe`)
    .then((res) => {
      dispatch({
        type: GET_NEWS_SUBSCRIBE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_NEWS_SUBSCRIBE,
        payload: { data: false, err },
      });
    });
};
/**
 * @method Newsletter_Unsubscriber
 *  @description in This function we hit the newsleeter unsubscriber api and get the data of all newsletter unsubscriber
 * @returns
 */
export const NewsLetter_Unsubscriber = (data1) => (dispatch) => {
  apidata
    .get(`NewsLetter/UnSubscribe`, data1)
    .then((res) => {
      dispatch({ type: GET_NEWSLEETER_UNSUBSCRIBER, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_NEWSLEETER_UNSUBSCRIBER,
        payload: { data: false, err },
      });
    });
};
export const Get_Enquiry = () => (dispatch) => {
  apidata
    .get(`UserEnquiry/getAll`)
    .then((res) => {
      console.log(res, "response");
      dispatch({ type: GET_ENQUIRY, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_ENQUIRY,
        payload: { data: false, err },
      });
    });
};
export const Login = (data, history) => (dispatch) => {
  apidata
    .post(`Account/login`, data)
    .then((res) => {
      dispatch({ type: LOGIN, payload: res.data });
      localStorage.setItem("nestor.user", JSON.stringify(res.data.token));
      history("/", { replace: true });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN,
        payload: { data: false, err },
      });
    });
};
export const Add_Enquiry = (data) => (dispatch) => {
  apidata
    .post(`UserEnquiry/update`, data)
    .then((res) => {
      dispatch({ type: GET_ENQUIRY, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_ENQUIRY,
        payload: { data: false, err },
      });
    });
};
export const Edit_Enquiry = (data) => (dispatch) => {
  console.log(data);
  apidata
    .get(`UserEnquiry/get?bsonId=${data.bsonId}`)
    .then((res) => {
      console.log(res, "log");
      dispatch({ type: EDIT_ENQUIRY, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_ENQUIRY,
        payload: { data: false, err },
      });
    });
};
export const Update_Enquiry = (data) => (dispatch) => {
  apidata
    .post(`UserEnquiry/update`, data)
    .then((res) => {
      dispatch({ type: UPDATE_ENQUIRY, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_ENQUIRY,
        payload: { data: false, err },
      });
    });
};
/**
 * @method Send_data
 * @description In this function we submit the data into store
 * @param {*} data1 this is the data that we submit the job post
 * @returns
 */
export const Send_data = (data1) => (dispatch) => {
  dispatch({
    type: POST_DATA,
    payload: data1,
  });
};
/**
 * @method getAllEnquries
 *  @description In this function we get all data of enquries
 * @returns
 */
export const getAllEnquries = () => (dispatch) => {
  dispatch({
    type: GET_ALL_ENQUIRY,
  });
};
/**
 * @method Edit_Data
 *  @description this function for edit the job post
 * @param {*} data data of particular index for editing purpose
 * @param {*} index index of table that we want to edit
 * @returns
 */

export const Edit_Data = (data, index) => (dispath) => {
  dispath({
    type: EDIT_DATA,
    payload: { data, index },
  });
};
/**
 * @method Updata_Data
 * @description this function for update the job post
 * @param {*} data data of particular index for update purpose
 * @param {*} index index of table that we want to update
 * @returns
 */
export const Update_Data = (data, index) => (dispath) => {
  dispath({
    type: UPDATE,
    payload: data,
  });
};
/**
 * @method Update_Data
 *  @descriptionthis function for update the profile data
 * @param {*} data data of profile that we want to update
 * @returns
 */
export const Update_Profile_Data = (data) => (dispath) => {
  dispath({
    type: UPDATE_PROFILE,
    payload: data,
  });
};
/**
 * @method Updata_Profile_Data
 * @description this function for get the profile data
 * @returns
 */
export const GET_profile_data = () => (dispatch) => {
  dispatch({
    type: GET_PROFILE_DATA,
  });
};
/**
 * @method GET_profile_data
 *  @description this function for edit the profile data
 * @returns
 */
export const Edit_profile_data = () => (dispatch) => {
  dispatch({
    type: GET_PROFILE_DATA,
  });
};
/**
 * @method GET_profile_password
 * @description this function for get the profile password for show
 * @returns
 */
export const GET_profile_password = () => (dispatch) => {
  dispatch({
    type: GET_PROFILE_PASSWORD,
  });
};
/**
 * @method Update_Profile_Password
 * @description this function for updating the profile password
 * @returnsk
 */
export const Update_Profile_Password = (data) => (dispath) => {
  dispath({
    type: UPDATE_PROFILE_PASSWORD,
    payload: data,
  });
};
