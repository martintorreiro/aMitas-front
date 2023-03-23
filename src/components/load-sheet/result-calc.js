import { v4 } from "uuid";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ResultCalc = ({ users,total }) => {

  
  


  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
  
  
  const data = {
    labels : users.map((user)=>user.name),
    datasets: [
      {
        data: users.map((user) => user.amount),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

 

  return (
    <div>
      <h4>Resultado cuentas</h4>
      <Bar options={options} data={data} />;
      <ul>
        {users.map((user) => {

          return (
            <li key={v4()}>
              Usuario: {user.name} Resultado: {user.amount}
            </li>
          );
        })}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
};

export default ResultCalc
 