import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
import { useTable } from 'react-table';
// Sesuaikan dengan path yang benar

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dblc.lifeforcode.net/dashboardkls')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'LC Customer KLS',
        columns: [
          {
            Header: 'Total LC',
            accessor: 'lc_customer',
          },
          {
            Header: 'New',
            accessor: 'lc_customer_new',
          },
          {
            Header: 'Check-in',
            accessor: 'lc_customer_checkin',
          },
          {
            Header: 'Physical Check',
            accessor: 'lc_customer_physical_check',
          },
          {
            Header: 'Open',
            accessor: 'lc_customer_open',
          },
          {
            Header: 'Close',
            accessor: 'lc_customer_close',
          },
          {
            Header: 'Check-out',
            accessor: 'lc_customer_checkout',
          },
        ],
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const chartData = {
    labels: [
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
          data[0]?.lc_customer_new || 0,
          data[0]?.lc_customer_checkin || 0,
          data[0]?.lc_customer_physical_check || 0,
          data[0]?.lc_customer_open || 0,
          data[0]?.lc_customer_close || 0,
          data[0]?.lc_customer_checkout || 0
        ] : [],
        backgroundColor: [
          '#82ca9d',
          '#ffc658',
          '#ff8042',
          '#00c49f',
          '#ffbb28',
          '#ff7300'
        ],
        hoverBackgroundColor: [
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1 className='title-hci'>Monitoring LC Customer KLS</h1>

      <div className="content-container">
        {/* Table */}
        <div className="table-container-centered">
          <table {...getTableProps()} className="styled-table">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="table-row">
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()} className="table-cell">{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
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
