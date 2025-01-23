import { useEffect, useState } from "react";
import search_icon from "../../assets/search.svg";

import "./body_nav.css"; // Import the CSS file for styling

interface BodyNavProps {
    toggle_mode: () => void;
    toggle_nav: () => void;
    dark_mode: boolean;
}

const BodyNav = ({ toggle_mode, toggle_nav, dark_mode = false }: BodyNavProps) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on mount to set the initial state
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container-fluid d-flex align-items-center justify-content-between" style={{ height: "60px", padding: "10px", backgroundColor: dark_mode ? "#1F2937": "white", color: dark_mode ? "white" : "black", borderLeft: "1px solid grey", borderBottom: "1px solid grey" }}>
            {
                <div className="d-flex align-items-center justify-content-between gap-3" style={{ backgroundColor: dark_mode ? "#1F2937": "white", color: dark_mode ? "white" : "black" }}>
                    {
                        width <= 992 && (
                            <a href="#" onClick={toggle_nav}>
                                <i className="fas fa-bars menu-icon"></i>
                            </a>
                        )
                    }
                    {
                        width >= 552 && (
                            <form className="d-none d-sm-flex"><div className="input-group"><span className="input-group-text bg-body-secondary border-0 px-1" id="search-addon"><img src={search_icon} alt="Search Icon" width={25}/></span><input className="form-control bg-body-secondary border-0" type="text" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/></div></form>
                        )
                    }
                </div>
            }
            <div className="d-flex align-items-center">
                {
                    width >= 768 && (
                        <div className="d-flex align-items-center gap-3">
                            <a href="#" className="nav-link notification-link" aria-expanded="false" role="button">
                                <span className="d-inline-block my-1 mx-2 position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-lg" role="img" aria-hidden="true" width={20}>
                                    <path
                                        fill="currentColor"
                                        d="M450.27,348.569,406.6,267.945V184c0-83.813-68.187-152-152-152s-152,68.187-152,152v83.945L58.928,348.568A24,24,0,0,0,80.031,384h86.935c-.238,2.636-.367,5.3-.367,8a88,88,0,0,0,176,0c0-2.7-.129-5.364-.367-8h86.935a24,24,0,0,0,21.1-35.431ZM310.6,392a56,56,0,1,1-111.419-8H310.018A56.14,56.14,0,0,1,310.6,392ZM93.462,352,134.6,276.055V184a120,120,0,0,1,240,0v92.055L415.736,352Z"
                                        className="ci-primary"></path>
                                    </svg>
                                    <span className="badge bg-danger position-absolute translate-middle top-0 start-100 rounded-circle p-1">
                                    <span className="visually-hidden">5 new alerts</span>
                                    </span>
                                </span>
                            </a>
                            <a href="#" className="nav-link notification-link" aria-expanded="false" role="button">
                                <span className="d-inline-block my-1 mx-2 position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-lg" role="img" aria-hidden="true" width={20}>
                                    <path
                                        fill="currentColor"
                                        d="M136,24H16V144H136Zm-32,88H48V56h56Z"
                                        className="ci-primary"></path>
                                    <path
                                        fill="currentColor"
                                        d="M136,200H16V320H136Zm-32,88H48V232h56Z"
                                        className="ci-primary"></path>
                                    <path
                                        fill="currentColor"
                                        d="M136,376H16V496H136Zm-32,88H48V408h56Z"
                                        className="ci-primary"></path>
                                    <rect width="320" height="32" x="176" y="23.998" fill="currentColor" className="ci-primary"></rect>
                                    <rect width="256" height="32" x="176" y="111.998" fill="currentColor" className="ci-primary"></rect>
                                    <rect width="320" height="32" x="176" y="199.998" fill="currentColor" className="ci-primary"></rect>
                                    <rect width="256" height="32" x="176" y="287.998" fill="currentColor" className="ci-primary"></rect>
                                    <rect width="256" height="32" x="176" y="463.998" fill="currentColor" className="ci-primary"></rect>
                                    <rect width="320" height="32" x="176" y="375.998" fill="currentColor" className="ci-primary"></rect>
                                    </svg>
                                    <span className="badge bg-danger position-absolute translate-middle top-0 start-100 rounded-circle p-1">
                                    <span className="visually-hidden">5 new alerts</span>
                                    </span>
                                </span>
                            </a>
                            <a href="#" className="nav-link notification-link" aria-expanded="false" role="button">
                                <span className="d-inline-block my-1 mx-2 position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-lg" role="img" aria-hidden="true" width={20}>
                                    <path
                                        fill="currentColor"
                                        d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                                        className="ci-primary"></path>
                                    </svg>
                                    <span className="badge bg-danger position-absolute translate-middle top-0 start-100 rounded-circle p-1">
                                    <span className="visually-hidden">4 new alerts</span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    )
                }
                <div className="vr" style={{ margin: "0 25px", color: dark_mode ? "white" : "black" }}></div>
                <a href="#" className="nav-link sun-icon-link" aria-expanded="false" role="button" onClick={toggle_mode}>
                    {
                        dark_mode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-lg" role="img" aria-hidden="true" width={20}><path fill="white" d="M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z" className="ci-primary"></path></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-lg" role="img" aria-hidden="true" width={20}>
                                <path fill="currentColor" d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z" className="ci-primary"></path>
                                <rect width="32" height="48" x="240" y="16" fill="currentColor" className="ci-primary"
                                ></rect>
                                <rect width="32" height="48" x="240" y="448" fill="currentColor" className="ci-primary"
                                ></rect>
                                <rect width="48" height="32" x="448" y="240" fill="currentColor" className="ci-primary"
                                ></rect>
                                <rect width="48" height="32" x="16" y="240" fill="currentColor" className="ci-primary"
                                ></rect>
                                <rect width="32" height="45.255" x="400" y="393.373" fill="currentColor" className="ci-primary" transform="rotate(-45 416 416)"
                                ></rect>
                                <rect width="32.001" height="45.255" x="80" y="73.373" fill="currentColor" className="ci-primary" transform="rotate(-45 96 96)"
                                ></rect>
                                <rect width="45.255" height="32" x="73.373" y="400" fill="currentColor" className="ci-primary" transform="rotate(-45.001 96.002 416.003)"
                                ></rect>
                                <rect width="45.255" height="32.001" x="393.373" y="80" fill="currentColor" className="ci-primary" transform="rotate(-45 416 96)"
                                ></rect>
                            </svg>
                        )
                    }
                </a>
                <div className="vr" style={{ margin: "0 25px", color: dark_mode ? "white" : "black" }}></div>
                <div className="profile-avatar">
                    <img src="https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 326w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 626w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 652w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 926w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=1226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1226w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1252w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1526w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1826w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1852w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2126w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2426w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=2452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2452w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=2726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2726w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=3026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3026w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3052w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=3326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3326w, https://plus.unsplash.com/premium_photo-1671541241879-9cf09574672c?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3376w" alt="Profile Avatar" className="avatar-image"/>
                </div>
                <button type="button" className="header-toggler" style={{ marginLeft: "25px", border: "none", backgroundColor: dark_mode ? "#1F2937" : "white", color: dark_mode ? "white" : "black" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon icon-lg" role="img" aria-hidden="true" width={20}>
                        <path fill="currentColor" d="M88,160A64,64,0,1,0,24,96,64.072,64.072,0,0,0,88,160Zm0-96A32,32,0,1,1,56,96,32.036,32.036,0,0,1,88,64Z" ></path>
                        <path fill="currentColor" d="M256,32a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,32Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,128Z" ></path>
                        <path fill="currentColor" d="M424,160a64,64,0,1,0-64-64A64.072,64.072,0,0,0,424,160Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,424,64Z" ></path>
                        <path fill="currentColor" d="M88,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,88,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,88,288Z" ></path>
                        <path fill="currentColor" d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z" ></path>
                        <path fill="currentColor" d="M424,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,288Z" ></path>
                        <path fill="currentColor" d="M424,352a64,64,0,1,0,64,64A64.072,64.072,0,0,0,424,352Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,424,448Z" ></path>
                        <rect width="32" height="32" x="56" y="408" fill="currentColor"></rect>
                        <rect width="32" height="32" x="152" y="408" fill="currentColor"></rect>
                        <rect width="32" height="32" x="248" y="408" fill="currentColor"></rect>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default BodyNav;
