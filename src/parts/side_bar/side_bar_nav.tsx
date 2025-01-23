import SimpleBar from "simplebar-react";
import NavItem from "../../components/nav_item";
import NavGroup from "../../components/nav_group";

import base_icon from "../../assets/base.svg";
import chart_icon from "../../assets/chart.svg";
import forms_icon from "../../assets/forms.svg";
import icons_icon from "../../assets/icons.svg";
import colors_icon from "../../assets/colors.svg";
import widgets_icon from "../../assets/widgets.svg";
import buttons_icon from "../../assets/buttons.svg";
import calendar_icon from "../../assets/calendar.svg";
import dashboard_icon from "../../assets/dashboard.svg";
import typography_icon from "../../assets/typography.svg";
import smart_table_icon from "../../assets/smart_table.svg";
import notifications_icon from "../../assets/notifications.svg";

import "./side_bar_nav.css";

const SidebarNav = () => {
    return (
        <SimpleBar className="sidebar-nav simplebar-scrollable-y">
            <div className="nav-content">
                {/* Dashboard */}
                <NavItem
                    href="/"
                    icon={<img src={dashboard_icon} alt="Dashboard Icon" />}
                    badge={{
                        text: "NEW",
                        style: { backgroundColor: "purple", color: "#fff" },
                    }}
                >
                    <p className="text-center" style={{ color: "white", marginBottom: "0" }}>
                        Dashboard
                    </p>
                </NavItem>

                {/* Theme Section */}
                <div className="nav-title">THEME</div>
                <NavItem
                    href="/theme/colors"
                    icon={<img src={colors_icon} alt="Colors Icon" style={{ width: "25px" }} />}
                >
                    <p className="text-center" style={{ color: "#e0e0e0", marginBottom: "0" }}>
                        Colors
                    </p>
                </NavItem>
                <NavItem
                    href="/theme/typography"
                    icon={<img src={typography_icon} alt="Typography Icon" style={{ width: "25px" }} />}
                >
                    <p className="text-center" style={{ color: "#e0e0e0", marginBottom: "0" }}>
                        Typography
                    </p>
                </NavItem>

                {/* Components Section */}
                <div className="nav-title">COMPONENTS</div>
                <NavGroup
                    title="Base"
                    icon={<img src={base_icon} alt="Base Icon" style={{ width: "25px" }} />}
                    items={[
                        {href: "/base/accordion" , label: "Accordion"},
                        {href: "/base/breadcrumb", label: "Breadcrumb"},
                        {href: "/base/cards", label: "Cards"},
                        {href: "/base/carousel", label: "Carousel"},
                        {href: "/base/collapse", label: "Collapse"},
                        {href: "/base/list-group", label: "List Group"},
                        {href: "/base/navs-tabs", label: "Navs & Tabs"},
                        { href: "/base/pagination", label: "Pagination" },
                        { href: "/base/placeholders", label: "Placeholders" },
                        { href: "/base/popovers", label: "Popovers" },
                        { href: "/base/progress", label: "Progress" },
                        { href: "/base/spinners", label: "Spinners" },
                        { href: "/base/tables", label: "Tables" },
                        { href: "/base/tooltips", label: "Tooltips" },                                         
                    ]}
                />
                <NavGroup title="Buttons" icon={<img src={buttons_icon} alt="Buttons Icon" style={{ width: "25px" }} />} items={[
                    { href: "/buttons/buttons", label: "Buttons" },
                    { href: "/buttons/button-groups", label: "Button groups" },
                    { href: "/buttons/dropdowns", label: "Dropdowns" },
                    { href: "/buttons/loading-buttons", label: "Loading Buttons", badge: { text: "PRO", style: { backgroundColor: "#FF007F", color: "white" }  }}
                ]}/>
                <NavGroup title="Forms" icon={<img src={forms_icon} alt="Forms Icon" style={{ width: "25px" }}/>} items={[
                    { href: "/form-control", label: "Form Control" },
                    { href: "/select", label: "Select" },
                    { href: "/multi-select", label: "Multi Select", badge: { text: "PRO", style: { backgroundColor: "#FF007F", color: "white" } }},
                    { href: "/checks-radios", label: "Checks & Radios" },
                    { href: "/range", label: "Range" },
                    { href: "/input-group", label: "Input Group" },
                    { href: "/floating-labels", label: "Floating Labels" },
                    { href: "/date-picker", label: "Date Picker", badge: { text: "PRO", style: { backgroundColor: "#FF007F", color: "white" } }},
                    { href: "/date-range-picker", label: "Date Range Picker", badge: { text: "PRO", style: { backgroundColor: "#FF007F", color: "white" } }},
                    { href: "/time-picker", label: "Time Picker", badge: { text: "PRO", style: { backgroundColor: "#FF007F", color: "white" } }},
                    { href: "/layout", label: "Layout" },
                    { href: "/validation", label: "Validation" }
                ]}/>
                <NavGroup title="Icons" icon={<img src={icons_icon} alt="Icons Icon" style={{ width: "25px" }} />} items={[
                    { href: "/icons/free", label: "CoreUI Free", badge: { text: "FREE", style: { backgroundColor: "#28a745", color: "white" } }},
                    { href: "/icons/flags", label: "CoreUI Flags" },
                    { href: "/icons/brands", label: "CoreUI Brands" }
                ]}/>
                <NavGroup title="Notifications" icon={<img src={notifications_icon} alt="Notifications Icon" style={{ width: "25px" }} />} items={[
                    { href: "alerts", label: "Alerts" },
                    { href: "badges", label: "Badges" },
                    { href: "modals", label: "Modal" },
                    { href: "toasts", label: "Toasts" }
                ]}/>
                <NavItem href="/widgets" icon={<img src={widgets_icon} alt="Icons Icon" style={{ width: "25px" }} />} badge={{ text: "NEW", style: { backgroundColor: "purple", color: "#fff" }}}>
                    <p className="text-center" style={{ color: "#e0e0e0", marginBottom: "0" }}>
                        Widgets
                    </p>
                </NavItem>
                <NavItem href="/smart-table" icon={<img src={smart_table_icon} alt="Icons Icon" style={{ width: "25px" }} />} badge={{ text: "PRO", style: { backgroundColor: "#FF007F", color: "white" }}}>
                    <p className="text-center" style={{ color: "#e0e0e0", marginBottom: "0" }}>
                        Smart Table
                    </p>
                </NavItem>

                {/* Plugins Section */}
                <div className="nav-title">PLUGINS</div>
                <NavItem href="/plugins/calendar" icon={<img src={calendar_icon} alt="Calendar Icon" style={{ width: "25px" }}/>} badge={{ text: "PRO", style: { backgroundColor: "#FF007F", color: "white" }}}>
                    <p className="text-center" style={{ color: "#e0e0e0", marginBottom: "0" }}>
                        Calendar
                    </p>
                </NavItem>
                <NavItem href="/plugins/charts" icon={<img src={chart_icon} alt="Calendar Icon" style={{ width: "25px" }}/>}>
                    <p className="text-center" style={{ color: "#e0e0e0", marginBottom: "0" }}>
                        Charts
                    </p>
                </NavItem>

                {/* Extras Section */}
                <div className="nav-title">EXTRAS</div>
            </div>
        </SimpleBar>
    );
};

export default SidebarNav;
