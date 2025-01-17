import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale);

const StyledBarChart: React.FC = () => {
  // Generate random values for each month
  const generateMonthlyData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const data = months.map(() => Math.floor(Math.random() * 11)); // Random values between 0 and 10
    return { labels: months, data };
  };

  const monthlyData = generateMonthlyData();

  // Chart data
  const data: ChartData<"bar"> = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: "Monthly Data",
        data: monthlyData.data,
        backgroundColor: "blue", // Light blue for bars
        borderColor: "blue", // Solid blue for borders
        borderWidth: 1,
        borderRadius: 10, // Rounded corners for bars
        barThickness: 30, // Reduce bar thickness
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Light grid lines for X-axis
        },
        ticks: {
          color: "#666", // Slightly darker labels for better contrast
        },
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
          color: "#666", // Slightly darker labels
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Light grid lines for Y-axis
        },
      },
    },
    elements: {
      bar: {
        borderSkipped: false, // Apply rounded corners on all sides
      },
    },
  };

  // Container styling
  const containerStyle: React.CSSProperties = {
    height: "400px",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "12px"
  };

  return (
    <div style={containerStyle}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StyledBarChart;
