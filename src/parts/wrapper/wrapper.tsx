import BodyNav from "../body/body_nav";
import { useEffect, useState } from "react";
import BodyFooter from "../body/body_footer";
import SidebarNav from "../side_bar/side_bar_nav";
import Dashboard from "../../interfaces/dashboard";
import SideBarHeader from "../side_bar/side_bar_header";
import Accordion from "../../interfaces/accordion";
import BreadCrumb from "../../interfaces/bread_crumb";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Colors from "../../interfaces/colors";
import Typography from "../../interfaces/typography";
import Card from "../../interfaces/card";
import Carousel from "../../interfaces/carousel";
import Collapse from "../../interfaces/collapse";
import ListGroup from "../../interfaces/list_group";
import NavsAndTabs from "../../interfaces/navs_tabs";
import Pagination from "../../interfaces/pagination";
import Progress from "../../interfaces/progress";
import Buttons from "../../interfaces/buttons";
import ButtonGroups from "../../interfaces/button_groups";
import Placeholders from "../../interfaces/placeholders";
import Popovers from "../../interfaces/popovers";
import Spinners from "../../interfaces/spinners";
import Tooltips from "../../interfaces/tooltips";
import ReactTableWithFilters from "../../interfaces/tables";
import Dropdowns from "../../interfaces/dropdowns";
import LoadingButtons from "../../interfaces/loading_buttons";
import Calendar from "../../interfaces/calendar";
import Charts from "../../interfaces/charts";


const Wrapper = () => {
    const [mode, setMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLargeEnough, setIsLargeEnough] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
            setIsLargeEnough(window.innerWidth >= 1400);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on mount to set the initial state
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="d-flex" style={{ height: "100vh" }}>
            {/* Sidebar for Large Screens */}
            {!isMobile && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "250px", height: "100%", backgroundColor: "#f0f0f0", zIndex: 1000  }}>
                    <SideBarHeader isOpen={false} setClosed={() => {}} />
                    <SidebarNav />
                </div>
            )}

            {/* Modal Sidebar for Small Screens */}
            {isMobile && isModalOpen && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "transparent", zIndex: 1001, display: "flex", flexDirection: "column" }}>
                        <SideBarHeader isOpen={true} setClosed={() => setIsModalOpen(false)} />
                        <SidebarNav />
                    </div>
                </div>
            )}

            {/* Body Component */}
            <div className={`flex-grow-1 ${isMobile && isModalOpen ? '' : 'ms-250'}`} style={{ transition: "margin-left 0.3s ease", marginLeft: isMobile ? 0 : "250px" }}>
                <BodyNav toggle_nav={() => setIsModalOpen(true)} dark_mode={mode} toggle_mode={() => setMode(prev => !prev)} />
                <Router>
                    <Routes>
                        <Route path="/" element={<Dashboard dark_mode={mode} isMobile={!isLargeEnough}/>}/>
                        <Route path="/theme/colors" element={<Colors dark_mode={mode}/>}/>
                        <Route path="/theme/typography" element={<Typography dark_mode={mode}/>}/>
                        <Route path="/base/accordion" element={<Accordion dark_mode={mode}/>}/>
                        <Route path="/base/breadcrumb" element={<BreadCrumb dark_mode={mode}/>}/>
                        <Route path="/base/cards" element={<Card dark_mode={mode}/>}/>
                        <Route path="/base/carousel" element={<Carousel dark_mode={mode}/>}/>
                        <Route path="/base/collapse" element={<Collapse dark_mode={mode}/>}/>
                        <Route path="/base/list-group" element={<ListGroup dark_mode={mode}/>}/>
                        <Route path="/base/navs-tabs" element={<NavsAndTabs dark_mode={mode}/>}/>
                        <Route path="/base/pagination" element={<Pagination dark_mode={mode}/>}/>
                        <Route path="/base/progress" element={<Progress dark_mode={mode}/>}/>
                        <Route path="/base/placeholders" element={<Placeholders dark_mode={mode}/>}/>
                        <Route path="/base/popovers" element={<Popovers dark_mode={mode}/>}/>
                        <Route path="/base/spinners" element={<Spinners dark_mode={mode}/>}/>
                        <Route path="/base/tables" element={<ReactTableWithFilters dark_mode={mode}/>}/>
                        <Route path="/base/tooltips" element={<Tooltips dark_mode={mode}/>}/>
                        <Route path="/buttons/buttons" element={<Buttons dark_mode={mode}/>}/>
                        <Route path="/buttons/button-groups" element={<ButtonGroups dark_mode={mode}/>}/>
                        <Route path="/buttons/dropdowns" element={<Dropdowns dark_mode={mode}/>}/>
                        <Route path="/buttons/loading-buttons" element={<LoadingButtons dark_mode={mode}/>}/>
                        <Route path="/plugins/calendar" element={<Calendar dark_mode={mode}/>}/>
                        <Route path="/plugins/charts" element={<Charts dark_mode={mode}/>}/>
                    </Routes>
                </Router>
                <BodyFooter dark_mode={mode} />
            </div>
        </div>
    );
};

export default Wrapper;
