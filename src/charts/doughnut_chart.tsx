import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const ReactFrameworksDoughnutChart: React.FC = () => {
  // Data for the doughnut chart
  const data = {
    labels: ["React", "Next.js", "Gatsby", "Remix", "Other"],
    datasets: [
      {
        label: "Usage (%)",
        data: [40, 30, 15, 10, 5], // Example usage percentages
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // React
          "rgba(255, 99, 132, 0.6)", // Next.js
          "rgba(54, 162, 235, 0.6)", // Gatsby
          "rgba(255, 206, 86, 0.6)", // Remix
          "rgba(153, 102, 255, 0.6)", // Other
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // React
          "rgba(255, 99, 132, 1)", // Next.js
          "rgba(54, 162, 235, 1)", // Gatsby
          "rgba(255, 206, 86, 1)", // Remix
          "rgba(153, 102, 255, 1)", // Other
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Usage of React Frameworks",
      },
    },
  };

  return (
    <div style={{ width: "50vh", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ReactFrameworksDoughnutChart;