import React, { useState } from "react";
import "./career.css";
import { useEffect } from "react";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import { useDispatch } from "react-redux";
import { createResume } from "../../Redux/Action/Actionfunction";
import { useHistory } from "react-router-dom";

const UploadCv = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [state, setstate] = useState();
  const [p, setP] = useState();
  // this changes the scrolling behavior to "smooth"
  return (
    <div>
      <div className="uploadCvPanel">
        <div className="container">
          <div className="up-gra">
            <div className="upload-Graphics">
              <img
                className="uploadGra"
                src="assets/img/upload-file.png"
                alt=""
              />
            </div>
            <div className="uploadBox">
              <div className="titleBox">Upload Your Resume</div>
              <form className="form">
                <div className="input-form mh-100">
                  <div className="upload Cv">
                    <img
                      className="outbox"
                      src="assets/img/outbox.svg"
                      alt=""
                    />{" "}
                    Add Docs
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    className="form-control"
                    onChange={async (e) => {
                      try {
                        let payload = new FormData();
                        payload.append("files", e.target.files[0]);
                        setstate(e.target.files[0]);
                        setP(payload);
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                  />
                  <div className="fileName">{state?.name}</div>
                </div>
              </form>
              <div className="input-form text-center">
                {p && (
                  <input
                    type="submit"
                    className="SubmitCv "
                    value="Send"
                    onClick={async (e) => {
                      try {
                        await dispatch(createResume(p, history));
                        setstate("");
                        setP("");
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  />
                )}
                {!p && (
                  <input
                    type="submit"
                    className="SubmitCv add"
                    value="Send"
                    disabled
                    onClick={async (e) => {
                      try {
                        await dispatch(createResume(p));
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withNewsletterAddress(UploadCv);
