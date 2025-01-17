import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
  ChartData,
} from "chart.js";

import './wave_chart.css';

// Register required Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const SineDecayWaveChart: React.FC = () => {
  // Function to generate sine-decay wave data
  const generateSineDecayWave = () => {
    const data: number[] = [];
    const labels: number[] = [];
    for (let i = 0; i <= 1080; i++) {
      const radians = (i * Math.PI) / 180; // Convert degrees to radians
      const decayFactor = Math.exp(-i / 500); // Exponential decay factor
      data.push(Math.sin(radians) * decayFactor); // Sine wave multiplied by decay
      labels.push(i); // Degree labels (X-axis)
    }
    return { labels, data };
  };

  const sineDecayWave = generateSineDecayWave();

  // Chart data type with strong TypeScript typing
  const data: ChartData<"line"> = {
    labels: sineDecayWave.labels,
    datasets: [
      {
        label: "Sine-Decay Wave",
        data: sineDecayWave.data,
        borderColor: "blue", // Vibrant purple for the line
        backgroundColor: "rgba(106, 13, 173, 0.2)", // Light purple for the filled area
        borderWidth: 3,
        fill: true, // Fill the area under the curve
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options type with strong typing
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend for simplicity
      },
    },
    scales: {
      x: {
        display: false, // Hide the X-axis
      },
      y: {
        display: false, // Hide the Y-axis
      },
    },
    elements: {
      point: {
        radius: 0, // Remove points for a smoother line
      },
    },
  };

  // Styling for container
  const containerStyle: React.CSSProperties = {
    height: "300px",
    width: "100%",
    margin: "0 auto",
    borderRadius: "10px",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <Line data={data} options={options} style={{ width: "100%" }} />
    </div>
  );
};

export default SineDecayWaveChart;
