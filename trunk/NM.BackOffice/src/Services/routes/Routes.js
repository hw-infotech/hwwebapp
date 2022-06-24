import { Redirect } from 'react-router'
import Home from '../../pages/Home'
import AddNewPost from '../../pages/blogs/addNewPost'
import Success_Stories from '../../pages/crausel/success_Stories';
import SubScriber from '../../pages/newsletter/subscriber'
import All_Enquiry from '../../pages/enquiry/All_Enquiry';
import Admin_Login from '../../pages/authnication/admin_login';
import Post_New_Job from '../../pages/postJobs/postNewJob';
import Applied_Job from '../../pages/postJobs/applied_Jobs';
import Job_Subscriber from '../../pages/postJobs/job_subscriber';
import Stacks from '../../pages/crausel/stacks';
import Add_Gallery_Event from '../../pages/crausel/add_gallery_event';
import Change_Gallery_Events from '../../pages/crausel/change_gallery_events';
import List_Of_Blogs from '../../pages/blogs/list_of_blogs'
import Edit_postJob from '../../pages/postJobs/editPost_Job';
import Particularjob from '../../pages/postJobs/particularlist';
import Profile from '../../pages/Profile/Profile';
import Post_Job from '../../pages/postJobs/post_job';

const routes = (path, element, exact = true) => {
    return { path, element, exact }
}
const route = [
    routes('/',<Home/>),
    routes('/post_job',<Post_Job/>),
    routes("/addNewPost", <AddNewPost />),
    routes('/particularjob', <Particularjob />),
    routes('/editPostjob', <Edit_postJob />),
    routes('/SuccessStories', <Success_Stories />),
    routes('/Subscriber', <SubScriber />),
    routes('/Profile', <Profile />),
    routes('/AllEnquiry', <All_Enquiry />),
    //routes('/Resolved', <Resolved />),
    //routes('/PendingEnquiry', <Pending_Enquiry />),
    routes('/PostNewJob', <Post_New_Job />),
    routes('/appliedjobs', <Applied_Job />),
    ///routes('/selecteduser', <Selected_User />),
    //routes('/rejecteduser', <Rejected_user />),
    routes('/jobsubscriber', <Job_Subscriber />),
    routes('/stacks', <Stacks />),
    routes('/addgalleryevent', <Add_Gallery_Event />),
    routes('/listofblogs', <List_Of_Blogs />),
    //routes('/test', < />),
    routes('/changegalleryevent', <Change_Gallery_Events />),
    // routes('/draftpost'),
    // routes('./pendingpost'),
]
export default route
