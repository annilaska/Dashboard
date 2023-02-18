import React from 'react'
import './MiniCard.css'
import Chart from 'react-apexcharts'


const MiniCard = ({ xl }) => {

    const firstRegion = xl
        .filter((el, index) => index >= 1 && index <= 6)

    const v = firstRegion
        .map(el => el[" Численность молодeжи, задействованной в программных мероприятиях по направлению "])
        .filter(el => el !== undefined)
    const b = firstRegion
        .map(el => el[" Количество детских и молодeжных общественных объединений, работающих по данному  "])
        .filter(el => el !== undefined)
    
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
                color: "#fca61f",
                opacity: 0.35
            },
            fill: {
                colors: ["#fff"],
                type: 'gradient'
            },
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth',
                colors: ["white"]
            },
            tooltip: {
                theme: '#000',
                cssClass: 'tooltip'

            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'string',
                categories: ['биомедицина', 'промышленные технологии', 'аэрокосмос', 'сельское хозяйство', 'информационные технологии - IT', 'другое'],
                labels:{
                    show: false
                  } 
            },
        },
        series: [
            {
                name: 'Численность молодeжи, задействованной в программных мероприятиях',
                data: v
            },
            {
                name: 'Количество детских и молодeжных общественных объединений',
                data: b
            },
        ]
    }


  return (
    <div className="compactCard">
        <Chart type='area' series={data.series} options={data.options} width={350} height={250} />
    </div>
  )
}

export default MiniCard