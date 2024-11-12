import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LineController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LineController,
  Title,
  Tooltip,
  Legend
);

const RealTimeShipGraph = ({ data }) => {
  // Function to create a chart configuration for each metric
  const createChartConfig = (label, dataset, color) => ({
    labels: dataset.map((_, i) => i), // Generate labels based on data length
    datasets: [
      {
        label,
        data: dataset,
        borderColor: color,
        backgroundColor: `${color}33`, // Lighter background color for fill effect
        borderWidth: 2,
        fill: true,
      },
    ],
  });

  // Define chart options for consistency
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
        },
      },
    },
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', width: '80%', margin: '0 auto' }}>
      <div style={{ height: '200px', width:"400px" }}>
        <h3>Speed (knots): {data.speed[data.speed.length-1].toFixed(2)}</h3>
        <Line width={1000} data={createChartConfig('Speed', data.speed, 'rgb(0, 0, 255)')} options={options} />
      </div>
      <div style={{ height: '200px', width:"400px" }}>
        <h3>Course Heading (degrees): {data.courseHeading[data.courseHeading.length-1].toFixed(2)}</h3>
        <Line width={1000} data={createChartConfig('Course Heading', data.courseHeading, 'rgb(0, 128, 0)')} options={options} />
      </div>
      <div style={{ height: '200px', width:"400px" }}>
        <h3>Fuel Consumption (L/h): {data.fuelConsumption[data.fuelConsumption.length-1].toFixed(2)}</h3>
        <Line width={1000} data={createChartConfig('Fuel Consumption', data.fuelConsumption, 'rgb(255, 0, 0)')} options={options} />
      </div>
      <div style={{ height: '200px', width:"400px"}}>
        <h3>Engine RPM: {data.engineRpm[data.engineRpm.length-1].toFixed(2)}</h3>
        <Line width={1000} data={createChartConfig('Engine RPM', data.engineRpm, 'rgb(255, 165, 0)')} options={options} />
      </div>
    </div>
  );
};

export default RealTimeShipGraph;
