import { Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Success_Stories from "../../pages/crausel/success_Stories";
import SubScriber from "../../pages/newsletter/subscriber";
import All_Enquiry from "../../pages/enquiry/All_Enquiry";
import Admin_Login from "../../pages/authnication/admin_login";
import Applied_Job from "../../pages/postJobs/applied_Jobs";
import Job_Subscriber from "../../pages/postJobs/job_subscriber";
import Add_Gallery_Event from "../../pages/crausel/add_gallery_event";
import Change_Gallery_Events from "../../pages/crausel/change_gallery_events";
import Edit_postJob from "../../pages/postJobs/editPost_Job";
import Particularjob from "../../pages/postJobs/particularlist";
import Profile from "../../pages/Profile/Profile";
import Post_Job from "../../pages/postJobs/post_job";
import Job_Preview from "../../pages/postJobs/job_preview";
import Update_Job from "../../pages/postJobs/updata-job";
import NotFound from "../../components/Not-found";
import Notification from "../../pages/Notification/notification";

const routes = (path, element, exact = true) => {
  return { path, element, exact };
};
const route = [
  routes("/notification",Notification),
  routes("/jobpreview", Job_Preview),
  routes("/add-job", Post_Job),
  routes("/particularjob", Particularjob),
  routes("/all-jobs", Edit_postJob),
  routes("/success-stories", Success_Stories),
  routes("/subscribe-unsubscribe", SubScriber),
  routes("/profile", Profile),
  routes("/all-enquiry", All_Enquiry),
  routes("/edit-job", Update_Job),
  routes("/appliedjobs", Applied_Job),
  routes("/job-subscribe-unsubscribe", Job_Subscriber),
  routes("/addgalleryevent", Add_Gallery_Event),
  routes("/changegalleryevent", Change_Gallery_Events),
  routes("/dashboard", Home),
  routes("/", Home),
  routes("*", NotFound),
  //routes('/Resolved', <Resolved />),
  //routes('/PendingEnquiry', <Pending_Enquiry />),
  ///routes('/selecteduser', <Selected_User />),
  //routes('/rejecteduser', <Rejected_user />),
  //routes('/test', < />),
  // routes('/draftpost'),
  // routes('./pendingpost'),
];
export default route;
