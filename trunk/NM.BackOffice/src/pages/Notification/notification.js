import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Notification = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
  // let a = [1, 2, 1, 5, 6, 4, 5, 5];
  // var filteredArray = a.filter(function (item, pos) {
  //   return a.indexOf(item) == pos;
  // });
  return (
    <div className="notification_content mt-2" id="demo-form">
      <h3>
        Notification <i class="fs-3 bi-bell"></i>
      </h3>

      <div className="notification_panel mt-4">
        <div className="notification_inner_part">
          <img
            src="./assets/images/NM-ICON.png"
            className="img-decorate"
            height="48px"
            width="48px"
          />
          <div>
            <p>John doe React your post</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </p>
            <p className="text-muted">
              <small>10 minutes ago</small>
            </p>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/ava3.png"
            className="img-decorate"
            width={"48px"}
            height={"48px"}
          />
        </div>
      </div>
      <div className="notification_panel mt-4">
        <div className="notification_inner_part">
          <img
            src="./assets/images/team_nestormind.png"
            className="img-decorate"
            height="48px"
            width="48px"
          />
          <div>
            <p>Richard Miles liked your post</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </p>
            <p className="text-muted">
              <small>10 minutes ago</small>
            </p>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/ava3.png"
            className="img-decorate"
            width={"48px"}
            height={"48px"}
          />
        </div>
      </div>
      <div className="notification_panel mt-4 mb-4">
        <div className="notification_inner_part">
          <img
            src="./assets/images/NM-ICON.png"
            className="img-decorate"
            height="48px"
            width="48px"
          />
          <div>
            <p>John doe React your post</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </p>
            <p className="text-muted">
              <small>10 minutes ago</small>
            </p>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/diwaliCel.jpg"
            className="img-decorate"
            width={"48px"}
            height={"48px"}
          />
        </div>
      </div>
      <ReCAPTCHA
        sitekey="6LckuYchAAAAAAwZOplPvCfxH2XXNRu9NsUXaaQ4"
        onChange={onChange}
      />
      <div
        class="g-recaptcha"
        data-sitekey="6LckuYchAAAAAAwZOplPvCfxH2XXNRu9NsUXaaQ4"
        data-callback="onSubmit"
        data-action="submit"
      >
        dsd
      </div>
    </div>
  );
};
export default Notification;
