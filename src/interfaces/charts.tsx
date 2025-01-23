import GitHubCommitsBarChart from "../charts/bar_chart";
import ReactFrameworksDoughnutChart from "../charts/doughnut_chart";
import GitHubCommitsLineChart from "../charts/line_chart";
import RandomPieChart from "../charts/pie_chart";
import ColorsPolarAreaChart from "../charts/polar_chart";
import RandomRadarChart from "../charts/radar_chart";
import Interfaces from "./interfaces";

const Charts = ({ dark_mode = false }) => {
    return (
        <Interfaces heading="Charts" dark_mode={dark_mode} links={
            <div className="d-flex gap-3">
                <a href="https://coreui.io/">Home</a> / <a href="https://coreui.io/plugins">Plugins</a>
            </div>
        }>
            <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center">
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''}`}>
                    <h6 style={{ padding: "1rem 1rem 1rem 1rem", backgroundColor: dark_mode ? "" : "#e0e0e0", marginBottom: "0" }}>Bar Chart</h6>
                    <hr style={{ marginTop: "0" }} />
                    <div className="p-4">
                        <GitHubCommitsBarChart/>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''}`}>
                    <h6 style={{ padding: "1rem 1rem 1rem 1rem", backgroundColor: dark_mode ? "" : "#e0e0e0", marginBottom: "0" }}>Line Chart</h6>
                    <hr style={{ marginTop: "0" }} />
                    <div className="p-4">
                        <GitHubCommitsLineChart/>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''}`}>
                    <h6 style={{ padding: "1rem 1rem 1rem 1rem", backgroundColor: dark_mode ? "" : "#e0e0e0", marginBottom: "0" }}>Doughnut Chart</h6>
                    <hr style={{ marginTop: "0" }} />
                    <div className="p-4">
                        <ReactFrameworksDoughnutChart/>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''}`}>
                    <h6 style={{ padding: "1rem 1rem 1rem 1rem", backgroundColor: dark_mode ? "" : "#e0e0e0", marginBottom: "0" }}>Pie Chart</h6>
                    <hr style={{ marginTop: "0" }} />
                    <div className="p-4">
                        <RandomPieChart/>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''}`}>
                    <h6 style={{ padding: "1rem 1rem 1rem 1rem", backgroundColor: dark_mode ? "" : "#e0e0e0", marginBottom: "0" }}>Polar Area Chart</h6>
                    <hr style={{ marginTop: "0" }} />
                    <div className="p-4">
                        <ColorsPolarAreaChart/>
                    </div>
                </div>
                <div className={`dashboard-card ${!dark_mode ? 'bg-white' : ''}`}>
                    <h6 style={{ padding: "1rem 1rem 1rem 1rem", backgroundColor: dark_mode ? "" : "#e0e0e0", marginBottom: "0" }}>Radar Chart</h6>
                    <hr style={{ marginTop: "0" }} />
                    <div className="p-4">
                        <RandomRadarChart/>
                    </div>
                </div>
            </div>
        </Interfaces>
    );
}

export default Charts;
