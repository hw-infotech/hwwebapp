import React, { useEffect } from "react";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import { InlineWidget } from "react-calendly";
import "../Meeting/meeting.css";

const Meeting = () => {
  useEffect(() => {
    // const element = document.querySelector("#candely").contentDocument
    //   .children[0].lastElementChild;
    // var iframe = document.getElementById("candely");
    // var iframeDocument =
    //   iframe.contentDocument || iframe.contentWindow.document;
    // if (!iframeDocument) {
    //   throw "iframe couldn't be found in DOM.";
    // }
    //var iframeContent = iframeDocument.querySelectorAll("#frameBody");
    // var iframe = document.getElementById("candely");
    // var innerDoc = iframe.contentDocument
    //   ? iframe.contentDocument
    //   : iframe.contentWindow.document;
    // console.log(innerDoc);
  }, []);

  return (
    <div className="candelyCal">
      <InlineWidget
        className="candely"
        url="https://calendly.com/nestormindpvtltd"
        pageSettings={{
          hideGdprBanner: true,
        }}
      />
    </div>
  );
};
export default withNewsletterAddress(Meeting);
