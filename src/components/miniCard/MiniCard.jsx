import React from 'react'
import './MiniCard.css'
import Chart from 'react-apexcharts'


const MiniCard = ({ xl }) => {

    const firstRegion = xl.filter(el => el.Регион === 'Алтайский край')
    const x = Object.values(firstRegion).filter(el => {
        const n = el.__rowNum__ >= 2 && el.__rowNum__ <= 7
        ? el
        : null
        return n
    })
    const v = Object.values(x).filter((el, index) => index === 5)
    console.log(v)
    ;
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.35
            },
            fill: {
                colors: ["#fff"],
                type: 'gradient'
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: ["white"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                }
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.00Z",
                    "2018-09-19T01:30:00.00Z",
                    "2018-09-19T02:30:00.00Z",
                    "2018-09-19T03:30:00.00Z",
                    "2018-09-19T04:30:00.00Z",
                    "2018-09-19T05:30:00.00Z",
                    "2018-09-19T06:30:00.00Z",
                ]
            },
        },
        series: [
            {
                name: 'Revenue',
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ]
    }


  return (
    <div className="compactCard">
        <Chart type='area' series={data.series} options={data.options} />
    </div>
  )
}

export default MiniCard