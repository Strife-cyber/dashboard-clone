import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GitHubCommitsLineChart: React.FC = () => {
  // Labels for the months of the year
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate random commit data for two datasets
  const data = {
    labels,
    datasets: [
      {
        label: "Repository A",
        data: labels.map(() => Math.floor(Math.random() * 100)), // Random commits between 0 and 100
        borderColor: "rgba(75, 192, 192, 1)", // Line color for Repository A
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color for Repository A
        borderWidth: 2,
        tension: 0.4, // Smooth line
      },
      {
        label: "Repository B",
        data: labels.map(() => Math.floor(Math.random() * 100)), // Random commits between 0 and 100
        borderColor: "rgba(255, 99, 132, 1)", // Line color for Repository B
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Fill color for Repository B
        borderWidth: 2,
        tension: 0.4, // Smooth line
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
        text: "GitHub Commits in 2024",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at 0
        ticks: {
          stepSize: 50, // Ensure 50 is included as a tick
          callback: (value: number | string) => {
            // Display only 0, 50, and 100 on the y-axis
            if ([0, 50, 100].includes(Number(value))) {
              return value;
            }
            return null; // Hide other ticks
          },
        }
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <div style={{ width: "50vh", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default GitHubCommitsLineChart;