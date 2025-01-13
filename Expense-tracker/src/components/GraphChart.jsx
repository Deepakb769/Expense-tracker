import React, { useRef, useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
// import {Chart as ChartJs} from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import '../index.css'

const GraphChart = ({ graphs }) => {
    Chart.register(...registerables); //register the chart
    const hasData = graphs && graphs.length > 0; //check if the data is present

    const labels = hasData ? graphs.map((item) => item.category || '') : [] //get the category
    const values = hasData ? graphs.map((item) => parseFloat(item.amount || 0)) : [] //get the amount

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Expenses',
                data: values,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(235, 111, 138, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                width: '500px',
           },
        ]
    }

    const chartOptions = {
        responsive: true, //responsive design
        plugins: { //plugin for the chart
            legend: { //legend plugin
                position: "top", //position of the legend
            }
        }
    }

    useEffect(() => {
        return () => {
            const chartInstance = Chart.getChart('myChart'); //get the chart instance
            if (chartInstance) {
                chartInstance.destroy(); //destroy the chart instance
           } 
        }
    }, [])


    return (
        <>
            <div className="graph-area" style={{ padding: '2rem 7rem' }}>
                {hasData ? (
                    <div className="dataCard" style={{display : 'flex', justifyContent : 'space-between'}}>
                        <h3>Chart</h3>
                       
                        <div className="pie-container"
                            style={{
                                width: '300px',
                                height: '300px',
                                margin: '20px 0',
                                
                            }}>
                            <Pie data={chartData} options={chartOptions} />
                        </div>
                        <div className="bar-container" style={{width : '630px', height : 'auto'}}>
                            <Bar data={chartData} options={chartOptions}  />
                        </div>
                    </div>
                ) : null}
            </div>

        </>
    )
}

export default GraphChart

// import React, { useEffect, useRef } from 'react';
// import { Chart, registerables } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import '../index.css';

// const GraphChart = ({ graphs }) => {
//     Chart.register(...registerables); // Register the chart.js components

//     const chartRef = useRef(null); // Create a reference for the chart

//     const hasData = graphs && graphs.length > 0; // Check if the data is present

//     const labels = hasData ? graphs.map((item) => item.category || '') : [];
//     const values = hasData ? graphs.map((item) => parseFloat(item.amount || 0)) : [];

//     const chartData = {
//         labels,
//         datasets: [
//             {
//                 label: 'Expenses by Category',
//                 data: values,
//                 backgroundColor: [
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                 ],
//                 borderColor: [
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(153, 102, 255, 1)',
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const chartOptions = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//         },
//     };

//     useEffect(() => {
//         if (hasData) {
//             const chartInstance = new Chart(chartRef.current, {
//                 type: 'pie',
//                 data: chartData,
//                 options: chartOptions,
//             });

//             return () => {
//                 chartInstance.destroy(); // Cleanup on component unmount or data change
//             };
//         }
//     }, [hasData, graphs]); // Depend on hasData and graphs to recreate or destroy the chart

//     return (
//         <>
//             <div className="graph-area" style={{ padding: '2rem 7rem' }}>
//                 {hasData ? (
//                     <div className="dataCard">
//                         <h3>Expenses Chart</h3>
//                         <div
//                             className="pie-container"
//                             style={{
//                                 width: '300px',
//                                 height: '300px',
//                                 margin: '20px 0',
//                             }}
//                         >
//                             <canvas ref={chartRef} />
//                         </div>
//                     </div>
//                 ) : (
//                     null
//                 )}
//             </div>
//         </>
//     );
// };

// export default GraphChart;
