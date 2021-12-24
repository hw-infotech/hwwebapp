import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from '../../data/routes';
const Layout = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (<Route {...route} key={index} />))}
            </Switch>
        </Router>
    )
}

export default Layout

// const hist = createBrowserHistory();
// export default class Layout extends Component { 
//     render() {
//         return (
//             <BrowserRouter>
//                 <Switch>
//                     <Route exact path = "/" component = {HomeContent} />
//                     <Route exact path = "/home" component = {HomeContent} />
//                     <Route exact path = "/about-us" component = {AboutUsContent} />
//                     <Route exact path = "/services" component = {ServicesMain} />
//                     <Route exact path = "/contact-us" component = {ContactUsContent} />
//                     <Route exact path = "/web-development" component = {WebDev} />
//                     <Route exact path = "/app-development" component = {AppDev} />
//                     <Route exact path = "/ui-ux-design" component = {UIUX} />
//                     <Route exact path = "/seo" component = {seoTest} />
//                     <Route exact path = "/graphic-design" component = {graphicsD} />
//                     <Route exact path="/telemedician" component={Telemedician} />
//                     <Route exact path="/career" component={Career} />
//                     <Route exact path="/UploadCv" component={UploadCv} />
//                     <Route exact path="/privacy-Policy" component={PrivacyPolicy} />
//                     <Route exact path="/terms-and-condition" component={TermsCondition} />
//                     <Route exact path="/blogs" component={BlogList} />
//                     <Route exact path="/blog-post" component={Blogpost} />
//                     <Route exact path="/NotFound" component = {NotFound} />
//                 </Switch>
//             </BrowserRouter>
//         )
//     }
// }