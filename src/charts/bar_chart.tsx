import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GitHubCommitsBarChart: React.FC = () => {
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

  // Generate random commit data for each month
  const data = {
    labels,
    datasets: [
      {
        label: "GitHub Commits",
        data: labels.map(() => Math.floor(Math.random() * 100)), // Random commits between 0 and 100
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
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
        text: "GitHub Commits in 2024",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at 0
        min: 0, // Explicitly set the minimum value
        max: 100, // Explicitly set the maximum value
        ticks: {
          stepSize: 50, // Ensure 50 is included as a tick
          callback: (value: number | string) => {
            // Display only 0, 50, and 100 on the y-axis
            if ([0, 50, 100].includes(Number(value))) {
              return value;
            }
            return value
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default GitHubCommitsBarChart;