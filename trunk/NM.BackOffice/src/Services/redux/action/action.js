import React from "react";
import {
  ADD_GALLERY_EVENT,
  ADD_NEW_BLOG,
  ADD_SUCCESS_STORIES,
  CONDITIONS,
  EDIT_DATA,
  GET_ALL_BlOG,
  GET_ALL_ENQUIRY,
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
 * in This function we hit the newsleeter api and get the data of all newsletter subscriber/unsubscriber
 * @returns
 */
export const News_letter_Subscribe = () => (dispatch) => {
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
/**
 * in This function we hit the newsleeter unsubscriber api and get the data of all newsletter unsubscriber
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
/**
 * In this function we submit the data into store
 * @param {this is the data that we submit the job post} data1
 * @returns
 */
export const Send_data = (data1) => (dispatch) => {
  dispatch({
    type: POST_DATA,
    payload: data1,
  });
};
/**
 * In this function we get all data of enquries
 * @returns
 */
export const getAllEnquries = () => (dispatch) => {
  dispatch({
    type: GET_ALL_ENQUIRY,
  });
};
/**
 * this function for edit the job post
 * @param {data of particular index for editing purpose} data
 * @param {index of table that we want to edit } index
 * @returns  it return data, and index
 */

export const Edit_Data = (data, index) => (dispath) => {
  dispath({
    type: EDIT_DATA,
    payload: { data, index },
  });
};
/**
 * this function for update the job post
 * @param {data of particular index for update purpose} data
 * @param {index of table that we want to update } index
 * @returns  it return data, and index
 */
export const Update_Data = (data, index) => (dispath) => {
  dispath({
    type: UPDATE,
    payload: data,
  });
};
/**
 * this function for update the profile data
 * @param {data of profile that we want to update} data
 * @returns
 */
export const Update_Profile_Data = (data) => (dispath) => {
  dispath({
    type: UPDATE_PROFILE,
    payload: data,
  });
};
/**
 * this function for get the profile data
 * @returns
 */
export const GET_profile_data = () => (dispatch) => {
  dispatch({
    type: GET_PROFILE_DATA,
  });
};
/**
 * this function for edit the profile data
 * @returns
 */
export const Edit_profile_data = () => (dispatch) => {
  dispatch({
    type: GET_PROFILE_DATA,
  });
};
/**
 * this function for get the profile password for show
 * @returns
 */
export const GET_profile_password = () => (dispatch) => {
  dispatch({
    type: GET_PROFILE_PASSWORD,
  });
};
/**
 * this function for updating the profile password
 * @returnsk
 */
export const Update_Profile_Password = (data) => (dispath) => {
  dispath({
    type: UPDATE_PROFILE_PASSWORD,
    payload: data,
  });
};
