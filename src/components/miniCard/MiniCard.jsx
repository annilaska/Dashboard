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
    const v = Object.values(x).map((el, index) => el[" Численность молодeжи, задействованной в программных мероприятиях по направлению "
])
    
    
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
                // type: 'datetime',
                categories: [
                    "биом-на",
                    "пром.тех-гии",
                    "аэрокосмос",
                    "сель.хоз.",
                    "IT",
                    "другие",
                ]
            },
        },
        series: [
            {
                name: 'Revenue',
                data: v
            }
        ]
    }
   

  return (
    <div className="compactCard">
        <Chart className="chart" type='area' series={data.series} options={data.options} />
    </div>
  )
}

export default MiniCard