import React, { useEffect } from "react";
const Home = () => {
useEffect(()=>{
    // setTitle("Dashboard")
})
    return (<div title={"Dashboard"}>
        <div className="gapPad">
            <div className="row">
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lg-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                                    <div className="icon-size">
                                        <i class="fs-1 bi  bi-calendar2-heart"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-sm col-md col-lg">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>

                                    </div>
                                </div>
                                <div className="card-footer">
                                    {/*<SecurityUpdateGoodTwoToneIcon />*/}Update Now
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-3">
                    <div className=" card-stats card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-size">
                                        <i class="fs-1 bi-calendar-date"></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>

                                    </div>
                                </div>
                                <div className="card-footer">
                                    {/*<SecurityUpdateGoodTwoToneIcon />*/} Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card-stats card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-size">
                                        <i className="fs-1 bi-bell" ></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    {/*<SecurityUpdateGoodTwoToneIcon />*/} Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className=" card-stats card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-size">
                                        <i className="fs-1 bi-window" ></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="textsizecolor">
                                        <div>Number
                                        </div>
                                        <h5>150GB</h5>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    {/*<SecurityUpdateGoodTwoToneIcon />*/}  Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
export default Home