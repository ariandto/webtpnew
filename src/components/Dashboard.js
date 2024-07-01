import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dblc.lifeforcode.net/dashboardlc')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    labels: [
      'LC Customer',
      'New',
      'Check-in',
      'Physical Check',
      'Open',
      'Close',
      'Check-out'
    ],
    datasets: [
      {
        label: 'LC Customer',
        data: data.length > 0 ? [
          data[0].lc_customer,
          data[0].lc_customer_new,
          data[0].lc_customer_checkin,
          data[0].lc_customer_physical_check,
          data[0].lc_customer_open,
          data[0].lc_customer_close,
          data[0].lc_customer_checkout
        ] : [],
        backgroundColor: [
          '#8884d8',
          '#82ca9d',
          '#ffc658',
          '#ff8042',
          '#00c49f',
          '#ffbb28',
          '#ff7300'
        ],
        hoverBackgroundColor: [
          '#8884d8',
          '#82ca9d',
          '#ffc658',
          '#ff8042',
          '#00c49f',
          '#ffbb28',
          '#ff7300'
        ]
      }
    ]
  };

  return (
    <div className="dashboard">
      <h1 className='title-hci'>Monitoring LC Customer KLS</h1>

      <div className="content-container">
        {/* Table */}
        <div className="table-container table-container-centered"> {/* Added class */}
          <table className="styled-table">
            <thead>
              <tr>
                <th>Total LC</th>
                <th>New</th>
                <th>Check-in</th>
                <th>Physical Check</th>
                <th>Open</th>
                <th>Close</th>
                <th>Check-out</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.lc_customer}</td>
                  <td>{item.lc_customer_new}</td>
                  <td>{item.lc_customer_checkin}</td>
                  <td>{item.lc_customer_physical_check}</td>
                  <td>{item.lc_customer_open}</td>
                  <td>{item.lc_customer_close}</td>
                  <td>{item.lc_customer_checkout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar Chart */}
        <div className="chart-container">
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
