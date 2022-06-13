import React, { useEffect, useMemo, useRef } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { BiDirections, BiTab, BiWallet } from "react-icons/bi";
import { Chart } from 'react-charts'
const Home = () => {
    const graphRef = useRef()

    const data = useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )
    const data1 = useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )
    const axes = useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    const axes1 = useMemo(
        () => [
            { primary: true, type: 'bar', position: 'bottom' },
            { type: 'bar', position: 'left' }
        ],
        []
    )
    useEffect(() => {
        // graphRef.current.style.background="yellow"
    }, [])

    return (<div>
        <div style={{ marginTop: "50px" }}>
            <Row>
                <Col md={3} sm={12} lg={3}>
                    <div className="card1">
                        <div className="card-header1">
                            <div className="icon-card1" style={{ background: "#42424a" }}>
                                <BiDirections size={24} />
                            </div>
                            <div className="innerCard">
                                <span>Today's Users</span>
                                <h4 style={{ fontWeight: "600" }}>$5k</h4>
                            </div>
                        </div>
                        <div className="card-footer1"> <span className="decoration">+5% </span>than yesterday</div>
                    </div>
                </Col>
                <Col md={3} sm={12} lg={3}>
                    <div className="card1">
                        <div className="card-header1">
                            <div className="icon-card1" style={{ background: "#d81b60" }}>
                                <BiTab size={24} />
                            </div>
                            <div className="innerCard">
                                <span>Job's Subscriber</span>
                                <h4 style={{ fontWeight: "600" }}>$53k</h4>
                            </div>
                        </div>
                        <div className="card-footer1"> <span className="text-decorationn1">-3%</span> than yesterday</div>
                    </div>
                </Col>
                <Col md={3} sm={12} lg={3}>
                    <div className="card1">
                        <div className="card-header1">
                            <div className="icon-card1" style={{ background: "#66bb6a" }}>
                                <BiWallet size={24} />
                            </div>
                            <div className="innerCard">
                                <span>Newsletter Subscriber</span>
                                <h4 style={{ fontWeight: "600" }}>$53k</h4>
                            </div>
                        </div>
                        <div className="card-footer1"> <span className="decoration">+9% </span>than yesterday</div>
                    </div>
                </Col>
                <Col md={3} sm={12} lg={3}>
                    <div className="card1">
                        <div className="card-header1">
                            <div className="icon-card1" style={{ background: "#49a3f1" }}>
                                <BsSearch size={24} />
                            </div>
                            <div className="innerCard">
                                <span>Performance</span>
                                <h4 style={{ fontWeight: "600" }}>$53k</h4>
                            </div>
                        </div>
                        <div className="card-footer1"> <span className="decoration">+8% </span>than yesterday</div>
                    </div>
                </Col>
            </Row>
            <div style={{ marginTop: "70px" }}>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="card1">
                            <div className="card-graphheader">
                                <div className="chart-card" style={{ background: "#ec407a" }}>
                                    <Chart data={data} axes={axes}
                                        //  options={{
                                        //     legend:{
                                        //         background:"green"
                                        //     }
                                        // }} 
                                        width="200px"
                                    />
                                </div>
                            </div>
                            <div className="chart-footer"><h5 className="heading-chartstyle">Website Views</h5>
                                <span className="chattext-size">Last Campaign Performance</span></div>
                            <div className="lower-footer">
                                <div> <BiWallet /></div>
                                <span className="chattext-size">campaign sent 5 days ago</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="card1">
                            <div className="card-graphheader">
                                <div className="chart-card" style={{ background: "#66bb6a" }}>
                                    <Chart data={data} axes={axes} style={{ width: "100px" }} />
                                </div>
                            </div>
                            <div className="chart-footer"><h5 className="heading-chartstyle">Website Views</h5>
                                <span className="chattext-size">Last Campaign Performance</span></div>
                            <div className="lower-footer ">
                                <div > <BiWallet /></div>
                                <span className="chattext-size">campaign sent 8 days ago</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="card1">
                            <div className="card-graphheader">
                                <div className="chart-card" style={{ background: "#42424a" }}>
                                    <Chart data={data} axes={axes} />
                                </div>
                            </div>
                            <div className="chart-footer"><h5 className="heading-chartstyle">Website Views</h5>
                                <span className="chattext-size">Last Campaign Performance</span></div>
                            <div className="lower-footer ">
                                <div> <BiWallet /></div>
                                <span className="chattext-size">campaign sent 2 days ago</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div style={{ marginTop: "70px" }}>
                    <Row>
                        <Col md={8} sm={12}>
                            <div className="card1">
                                <div><h5 style={{ fontWeight: 600 }}>Project</h5></div>
                                <div className="">
                                    <div>
                                        <p className="chattext-size1">30 done this month</p></div>
                                </div>
                                <Table style={{ borderTop: "0px" }}>
                                    <tr>
                                        <th className="textdecorarte" >Companies
                                        </th>
                                        <th className="textdecorarte">Companies
                                        </th>
                                        <th className="textdecorarte">Companies
                                        </th>
                                        <th className="textdecorarte">Companies
                                        </th>
                                    </tr>
                                </Table>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="card1"></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
    );

}
export default Home

{/* <div className="gapPad">
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
                                    <SecurityUpdateGoodTwoToneIcon />Update Now
        </div>
    </div>
                        </div >
                    </div >

                </div >
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
                                   Update Now
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
                                   Update Now
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
                                     Update Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div >*/}