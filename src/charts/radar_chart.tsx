import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RandomRadarChart: React.FC = () => {
  // Labels for the radar chart axes
  const labels = ["Speed", "Reliability", "Comfort", "Safety", "Efficiency", "Performance"];

  // Data for the radar chart
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 100)), // Random values between 0 and 100
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color for Dataset 1
        borderColor: "rgba(75, 192, 192, 1)", // Line color for Dataset 1
        borderWidth: 2,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 100)), // Random values between 0 and 100
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Fill color for Dataset 2
        borderColor: "rgba(255, 99, 132, 1)", // Line color for Dataset 2
        borderWidth: 2,
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
        text: "Radar Chart with Two Random Datasets",
      },
    },
    scales: {
      r: {
        beginAtZero: true, // Start the radial scale at 0
        ticks: {
          stepSize: 20, // Set the step size for the radial scale
        },
      },
    },
  };

  return (
    <div style={{ width: "50vh", margin: "0 auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RandomRadarChart;