import React, { useEffect, useRef, useState } from "react";
import { IMuiFbPhotoGridImage, MuiFbPhotoGrid } from "mui-fb-photo-grid";
import Dashboard from "../../layout/dashboard";
import Stories from "react-insta-stories";
import ReactPlayer from "react-player";
import { IMAGES1, stories12 } from "./JSON";
import ReactAudioPlayer from "react-audio-player";
import autoplay from "./Written-in-the-Genes_ALT_SHK010201.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Button, Col, Modal, Row } from "react-bootstrap";
import moment from "moment";
import Slider from "react-slick";
import "./gallery.css";
import color from "../../Shared/color";

const Gallery = () => {
  const reff = useRef();
  const [show, setShow] = useState(false);
  const [audioState, setAudioState] = useState("");
  const [audio, setAudio] = useState("");
  const [sliderImage, setSliderImage] = useState();
  let audiourl = new Audio("");
  const [currentIndex, setCurrrentIndex] = useState(0);
  const [indexPost, setIndexPost] = useState(0);
  const [sliderLength, setSliderLength] = useState();
  const [selected, setSelected] = useState(0);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: sliderLength,
    slidesToScroll: 6,
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const storyStyles = {
    display: "flex",
    width: "100%",
    margin: "auto",
    borderRadius: "15px ",
    height: "420px",
    maxWidth: "100%",
    maxHeight: "420px",
    justifyContent: "center",
    alignItems: "center",
  };

  const storyContainerStyles = {
    margin: "auto",
    borderRadius: "15px",
    background: "rgb(195 42 42) ",
  };

  const audio1 = new Audio("http://streaming.tdiradio.com:8000/house.mp3");

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevAmount = usePrevious(audioState.audio);

  useEffect(() => {
    console.log("called");
  }, [indexPost]);

  useEffect(() => {
    const storyDiv = document.querySelectorAll(".storyDiv");
    const res = stories12.length;
    console.log(res);
    if (stories12.length < 6) {
      setSliderLength(stories12.length);
    }
    if (stories12.length >= 6) {
      setSliderLength(6);
    }
  }, []);

  return (
    <Dashboard>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="justify-content-center">
          <div
            id="storyDiv"
            onLoad={() => {
              let maindiv = document.querySelectorAll("#storyDiv")[0]
                .children[0];
              console.log("maindiv", maindiv);
              let innerdiv = maindiv.getElementsByTagName("img");
              innerdiv[0].parentElement.parentElement.className = "imgStyle";
              maindiv.firstChild.className = "storyProgressBar";
               maindiv.className = "storyProgressContainer";
            }}
          >
            <Stories
              className="storiesSlider"
              currentIndex={currentIndex}
              loop={true}
              stories={indexPost.posts}
              // defaultInterval={8000}
              width={600}
              height={430}
              keyboardNavigation={true}
              storyStyles={storyStyles}
              storyContainerStyles={storyContainerStyles}
              onStoryStart={(props) => {
                setSelected(indexPost.id);
                setAudioState(indexPost.posts[props]);
              }}
              onLoad={(props) => {
                // console.log("onLoad",props);
              }}
              onHide={(props) => {
                // console.log("onHide",props);
              }}
              onClick={(props) => {
                // console.log("onClick",props);
              }}
              onStoryEnd={(props) => {
                // console.log("onStoryEnd",props);
              }}
              onAllStoriesEnd={(props) => {
                if (indexPost.id < stories12.length - 1) {
                  let oldId = indexPost.id;
                  oldId++;
                  setAudio(stories12[oldId].audio);
                  setIndexPost({ posts: stories12[oldId].posts, id: oldId });
                }
                if (indexPost.id >= stories12.length) {
                  setAudio(stories12[0].audio);
                  setIndexPost({ posts: stories12[0].posts, id: 0 });
                }
              }}
            />
          </div>
          <ReactAudioPlayer
            className="rhap_container"
            ref={reff}
            src={audio}
            autoPlay={true}
            muted={false}
            volume={audioState.type == "image" ? 1 : 0.1}
            controls
          />
          <Slider {...settings} className="storySlider">
            {stories12?.map((story, index) => {
              return (
                <div key={index} className="sliderFirstDiv">
                  <img
                    src={story.posts[0].url}
                    alt="slider image"
                    height={160}
                    onClick={() => {
                      setCurrrentIndex(0);
                      setAudio(story.audio);
                      setIndexPost({
                        ...indexPost,
                        posts: story.posts,
                        id: index,
                      });
                      setSelected(index);
                    }}
                  />
                  <span className={selected == index ? "red" : "white"}>
                    {story.event_title}
                  </span>
                </div>
              );
            })}
          </Slider>
        </Modal.Header>
      </Modal>
      <div className="galleryPanel">
        <div className="container" id="">
          <div className="galleryMain">
            <div className="galleryContainer">
              <div className="ps-0">
                <h2>Event Stories</h2>
              </div>
              <div>
                <Row>
                  {stories12?.map((story, index) => {
                    {
                      console.log(color());
                    }
                    if (index % 2 == 0) {
                      return (
                        <Col
                          key={index}
                          sm={12}
                          xs={12}
                          xxl={12}
                          lg={12}
                          xl={12}
                          md={12}
                        >
                          <div
                            className="galleryCardPanel1"
                            id={"galleryCardPanel" + index}
                            style={{}}
                          >
                            <div className="cardBox1">
                              <div className="innerCard1">
                                <div className="imageCard">
                                  <img src={story.posts[0].url} />
                                </div>
                                <div className="event_div">
                                  <div className="event_content">
                                    <label className="event_title">
                                      {story.event_title}
                                    </label>
                                    <label className="event_date">
                                      Date{" "}
                                      {moment(`${story.createAt}`).format(
                                        "DD/MM/yyyy, h:m:s A"
                                      )}
                                    </label>
                                  </div>
                                  <div className="event_icon">
                                    <i
                                      onClick={() => {
                                        setIndexPost({
                                          ...indexPost,
                                          posts: story.posts,
                                          id: index,
                                        });
                                        setAudio(story.audio);
                                        handleShow();
                                        setAudioState(story.posts[0]);
                                        setSliderImage(story.posts);
                                      }}
                                      className="bi bi-play-circle"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="eventDetailBox">
                              <div className="title">{story.event_title}</div>
                              <div className="eventDiscriptions">
                                {story.event_dics}
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    } else {
                      return (
                        <Col
                          key={index}
                          sm={12}
                          xs={12}
                          xxl={12}
                          lg={12}
                          xl={12}
                          md={12}
                        >
                          <div
                            className="galleryCardPanel"
                            id={"galleryCardPanel" + index}
                          >
                            <div className="cardBox">
                              <div className="innerCard">
                                <div className="imageCard">
                                  <img src={story.posts[0].url} />
                                </div>
                                <div className="event_div">
                                  <div className="event_content">
                                    <label className="event_title">
                                      {story.event_title}
                                    </label>
                                    <label className="event_date">
                                      Date{" "}
                                      {moment(`${story.createAt}`).format(
                                        "DD/MM/yyyy, h:m:s A"
                                      )}
                                    </label>
                                  </div>
                                  <div className="event_icon">
                                    <i
                                      onClick={() => {
                                        setIndexPost({
                                          ...indexPost,
                                          posts: story.posts,
                                          id: index,
                                        });
                                        setAudio(story.audio);
                                        handleShow();
                                        setAudioState(story.posts[0]);
                                        setSliderImage(story.posts);
                                      }}
                                      className="bi bi-play-circle"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="eventDetailBox">
                              <div className="title">{story.event_title}</div>
                              <div className="eventDiscriptions">
                                {story.event_dics}
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    }
                  })}
                  {/**<Col sm={2} xs={2} xxl={3} lg={3} xl={3} md={3} className="p-1">
                                <div className="cardBox">
                                    <div className="innerCard">
                                        <div className="imageCard">
                                            <img src="/assets/img/team/untitled-14.jpg" />
                                        </div>
                                        <div className="event_div">
                                            <div className="event_content">
                                                <label className="event_title">Event Title</label>
                                                <label className="event_date">Date {moment('Tue Dec 28 2021 18:20:54 GMT+0530 (India Standard Time)').format('DD/MM/yyyy, h:m:s A')}</label>
                                            </div>
                                            <div className="event_icon">
                                                <i onClick={handleShow} className="bi bi-play-circle"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col sm={2} xs={2} xxl={3} lg={3} xl={3} md={3} className="p-1">
                                <div className="cardBox">
                                    <div className="innerCard">
                                        <div className="imageCard">
                                            <img src="/assets/img/team/untitled-14.jpg" />
                                        </div>
                                        <div className="event_div">
                                            <div className="event_content">
                                                <label className="event_title">Event Title</label>
                                                <label className="event_date">Date {moment('Tue Dec 28 2021 18:20:54 GMT+0530 (India Standard Time)').format('DD/MM/yyyy, h:m:s A')}</label>
                                            </div>
                                            <div className="event_icon">
                                                <i onClick={handleShow} className="bi bi-play-circle"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col sm={2} xs={2} xxl={3} lg={3} xl={3} md={3} className="p-1">
                                <div className="cardBox">
                                    <div className="innerCard">
                                        <div className="imageCard">
                                            <img src="/assets/img/team/untitled-14.jpg" />
                                        </div>
                                        <div className="event_div">
                                            <div className="event_content">
                                                <label className="event_title">Event Title</label>
                                                <label className="event_date">Date {moment('Tue Dec 28 2021 18:20:54 GMT+0530 (India Standard Time)').format('DD/MM/yyyy, h:m:s A')}</label>
                                            </div>
                                            <div className="event_icon">
                                                <i onClick={handleShow} className="bi bi-play-circle"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col> */}
                </Row>
              </div>
            </div>
            <div className="p-2">
              <div className="pt-5">
                <h2>Nestormind Gallery</h2>
              </div>
              <div className="galleryClick">
                <MuiFbPhotoGrid
                  images={IMAGES1} // require
                  reactModal
                  Style={{ overlay: { zIndex: 2000 } }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Gallery;
