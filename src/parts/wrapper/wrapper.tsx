import BodyNav from "../body/body_nav";
import { useEffect, useState } from "react";
import BodyFooter from "../body/body_footer";
import Colors from "../../interfaces/colors";
import SidebarNav from "../side_bar/side_bar_nav";
import Dashboard from "../../interfaces/dashboard";
import SideBarHeader from "../side_bar/side_bar_header";
import Typography from "../../interfaces/typography";


const Wrapper = () => {
    const [mode, setMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
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
                <Typography dark_mode={mode}/>
                <BodyFooter dark_mode={mode} />
            </div>
        </div>
    );
};

export default Wrapper;
