import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const ColorsPolarAreaChart: React.FC = () => {
  // Labels for the polar area chart segments
  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  // Data for the polar area chart
  const data = {
    labels,
    datasets: [
      {
        label: "Color Intensity",
        data: labels.map(() => Math.floor(Math.random() * 100) + 1), // Random values between 1 and 100
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Green
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(75, 192, 192, 1)", // Green
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(255, 159, 64, 1)", // Orange
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
        text: "Polar Area Chart of Colors",
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
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default ColorsPolarAreaChart;