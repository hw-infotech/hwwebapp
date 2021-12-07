import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './career.css';
import Footer_new from '../Layout/Footer_new';

class UploadCv extends Component {
    componentDidMount = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }// this changes the scrolling behavior to "smooth"
    render() {
        return (
            <>

                <NavBar />

                <div className="uploadCvPanel">
                    <div className="container">

                        <div className="up-gra">
                            <div className="upload-Graphics">
                                <img className="uploadGra" src="assets/img/upload-file.png" />
                            </div>
                            <div className="uploadBox">
                                <div className="titleBox">
                                    Upload Your Resume
                                </div>
                                <form>
                                    <div className="input-form mh-100">
                                        <div className="upload Cv"><img className="outbox" src="assets/img/outbox.svg" /></div>
                                        <input type="file" className="form-control" />
                                        <div className="fileName">Your_resume_Name.pdf</div>
                                    </div>
                                    <div className="input-form">
                                        <input type="submit" className="SubmitCv" value="Send" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer_new />
            </>
        )
    }
}
export default UploadCv;