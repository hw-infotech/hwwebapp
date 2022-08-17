import React from "react";

const Notification = () => {
  return (
    <div className="notification_content mt-2">
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
            src="./assets/images/diwaliCel.jpg"
            className="img-decorate"
            width={"48px"}
            height={"48px"}
          />
        </div>
      </div>
    </div>
  );
};
export default Notification;
