import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { subscribeNewsletter } from "../../Redux/Action/Actionfunction";
import swal from "sweetalert";
import { Field, Formik } from "formik";
import * as Yup from "yup";

export default function NewsLetter() {

 const dispatch = useDispatch();
 const [newsletter1, setNewsLetter1] = useState();



 const handleFormSubmit = (values, { resetForm }) => {
   console.log("values ", values.email);
   dispatch(subscribeNewsletter(values.email));
   // notify()
   resetForm();
 };

const emailValidation = () => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return !(!newsletter1 || regex.test(newsletter1) === false);
};

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
  });
const newsletterEmail = (e) => {
  const { name, value } = e.target;
  setNewsLetter1(value);
};


const sendNewsletterEmail = () => {
  if (newsletter1 === "" || !emailValidation()) {
    swal({
      text: "Enter valid Email",
      title: "Warning",
      icon: "warning",
    });
  } else {
    dispatch(subscribeNewsletter(newsletter1));
    // console.log("email", dispatch(subscribeNewsletter(newsletter1)));
    document.getElementById("blogEmail").value = "";
  }
};    


 return (
   <div className="subscriptionPlan">
     <div className="container">
       <div className="subBox">
         <div className="labelIcon">
           <img
             src={"./assets/img/blogBanners/newsletter.png"}
             alt="image"
             className="lazyloaded"
             data-ll-status="loaded"
           />
         </div>
         <div className="headings">
           <h4>Subscribe to Newsletter</h4>
           <p>
             Subscribe to be the first to hear about updates, tips and
             recommendations!
           </p>
         </div>
         <div className="newsletterPlan">
           <div className="tnp tnp-subscription-minimal ">
             <Formik
               onSubmit={handleFormSubmit}
               initialValues={{ email: "" }}
               validationSchema={validationSchema}
             >
               {({ handleSubmit, values }) => (
                 <form
                   onSubmit={(e) => {
                     e.preventDefault();
                     handleSubmit();
                   }}
                 >
                   <input
                     className="tnp-email"
                     type="email"
                     name="email"
                     placeholder="Enter your email here"
                     onChange={newsletterEmail}
                     id="blogEmail"
                   />
                   <button
                     className="tnp-submit"
                     type="submit"
                     value="Subscribe"
                     onClick={sendNewsletterEmail}
                   >
                     Subscribe
                   </button>
                 </form>
               )}
             </Formik>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
