import React from "react";
import Interfaces from "./interfaces";
import cart_icon from "../assets/cart.svg";
import group_icon from "../assets/group.svg";
import arrow_up_icon from "../assets/arrow_up.svg";
import SineWaveChart from "../components/wave_chart";
import arrow_down_icon from "../assets/arrow_down.svg";
import YearsBarChart from "../components/years_bar_chart";

import './dashboard.css';
import CustomButton from "../components/custom_button";
import BuildUserData from "../components/build_user_data";

interface DashboardProps {
    dark_mode: boolean;
    isMobile: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ dark_mode = false, isMobile }) => {



    return (
        <Interfaces heading="Dashboard" dark_mode={dark_mode} links={<a href="https://coreui.io/">Home</a>}>
            <div className="d-flex flex-wrap align-items-center">
                <div className={`d-flex container-fluid gap-5 ${ isMobile ? "flex-wrap" : "" }`}>
                    <div className={`${isMobile ? "container-fluid" : ""} w-10`}> 
                        <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100 p-4`} style={{ minHeight: isMobile ? "400px" : "" }}>
                            <div className="d-flex align-items-center justify-content-between">
                                <h3>Sale</h3>
                                <h3 style={{ color: "blue" }}>$613.200</h3>
                            </div>
                            <p>January - July 2025</p>
                            <SineWaveChart />
                        </div>
                        <div className="d-flex p-2 mt-4 gap-5">
                            <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-50 p-4 d-flex flex-column justify-content-between`} style={{ height: "200px" }}>
                                <div className="d-flex justify-content-between">
                                    <p>Customers</p>
                                    <div><img src={group_icon} alt="Group Icon" width={25} /></div>
                                </div>
                                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>44.725</p>
                                <div className="d-flex align-items-center">
                                    <p style={{ color: "red" }}>(-12.4%</p>
                                    <img src={arrow_down_icon} style={{ width: "20px" }} alt="Arrow Down" />
                                    <p style={{ color: "red" }}>)</p>
                                </div>
                            </div>
                            <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-50 p-4 d-flex flex-column justify-content-between`} style={{ height: "200px" }}>
                                <div className="d-flex justify-content-between">
                                    <p>Orders</p>
                                    <div><img src={cart_icon} alt="Cart Icon" width={25} /></div>
                                </div>
                                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>385</p>
                                <div className="d-flex align-items-center">
                                    <p style={{ color: "green" }}>(17.2%</p>
                                    <img src={arrow_up_icon} style={{ width: "20px" }} alt="Arrow Up" />
                                    <p style={{ color: "green" }}>)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100 p-4 mt-4`} style={{ minHeight: isMobile ? "400px" : "" }}>
                        <h3>Traffic</h3>
                        <p>January 01, 2024 - December 31, 2024</p>
                        <YearsBarChart />
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''} w-100 p-4 mt-4`} style={{ minHeight: "400px" }}>
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>Users</h3>
                        <CustomButton text="Add new user" iconClass="fas fa-user-plus" />
                    </div>
                    <p>1.232.150 registered users</p>
                    <BuildUserData/>
                </div>
            </div>
        </Interfaces>
    );
};

export default Dashboard;
