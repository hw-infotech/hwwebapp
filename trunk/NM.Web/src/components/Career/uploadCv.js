import React, { useRef, useState } from "react";
import "./career.css";
import { useEffect } from "react";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import { useDispatch } from "react-redux";
import { createResume } from "../../Redux/Action/Actionfunction";
import { useHistory } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "bootstrap";

const UploadCv = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [state, setstate] = useState();
  const [p, setP] = useState(false);
  const [captcha, setCaptcha] = useState(true);

  // this changes the scrolling behavior to "smooth"
  function onChange(value) {
    console.log("Captcha value:", value);
    if (value) {
      return setCaptcha(false);
    }
    return setCaptcha(false);
  }

  // const recaptchaRef = React.createRef();
  const recaptchaRef = useRef();
  const onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  };
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
                    />
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
                        setP(true);
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                  />
                  <div className="fileName">{state?.name}</div>
                </div>
              </form>
              <div className="recaptcha">
                <ReCAPTCHA
                  size="normal"
                  sitekey="6Lf-kY0hAAAAAJMG3xUp-jxU7HPFmf7kHECpsITs"
                  ref={recaptchaRef}
                  onChange={onChange}
                />
              </div>
              <div className="input-form text-center">
                {captcha==false && p==true ? (
                  <input
                    type="submit"
                    className="SubmitCv"
                    value="Send"
                    data-sitekey="6Lf-kY0hAAAAAJMG3xUp-jxU7HPFmf7kHECpsITs"
                    data-callback={onSubmit}
                    ref={recaptchaRef}
                    data-action="submit"
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
                ) : (
                  <input
                    type="submit"
                    className="SubmitCv add"
                    value="Send"
                    disabled
                    data-sitekey="6Lf-kY0hAAAAAJMG3xUp-jxU7HPFmf7kHECpsITs"
                    data-callback={onSubmit}
                    ref={recaptchaRef}
                    data-action="submit"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withNewsletterAddress(UploadCv);
