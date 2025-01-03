import React from 'react'
import { Chart as ChartJS } from 'chart.js'
// import {Chart as ChartJs} from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'

const GraphChart = () => {
  return (
    <>
      <div className="data-card">Chart</div>
      <div className="line-chart">
        <Line 
            data={{
                labels : ["Jan", "Feb", "Mar"],
                datasets : [
                    {
                        label : "Income",
                        data : [100, 200, 300],
                    },
                    {
                        label : "Expense",
                        data : [50, 100, 150],
                    },
                    {
                        label : "Net",
                        data : [50, 100, 150],
                    }
                ]
            }}
        />
      </div>
    </>
  )
}

export default GraphChart
