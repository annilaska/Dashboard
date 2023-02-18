import React from 'react'
import './MiniCard.css'
import Chart from 'react-apexcharts'


const MiniCard = ({ xl }) => {

    const firstRegion = xl
        .filter((el, index) => index >= 1 && index <= 6)

    const v = firstRegion.map(el => el[" Численность молодeжи, задействованной в программных мероприятиях по направлению "])
    const b = firstRegion.map(el => el[" Количество детских и молодeжных общественных объединений, работающих по данному  "])
    
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
                x: { //['биомедицина', 'промышленные технологии', 'аэрокосмос', 'сельское хозяйство', 'информационные технологии - IT', 'другое']
                    format: 'dd/MM/yy HH:mm',
                },
                theme: '#000'

            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'string',
                categories: ['биомедицина', 'промышленные технологии', 'аэрокосмос', 'сельское хозяйство', 'информационные технологии - IT', 'другое']
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
            /* {
                name: 'Бюджет грантов, руб',
                //data: n
            },
            {
                name: 'Кол-во грантов',
                //data: m
            },
            {
                name: 'Бюджет МО, руб',
                //data: c
            },{
                name: 'Бюджет СРФ, руб',
                //data: z
            } */
        ]
    }


  return (
    <div className="compactCard">
        <Chart type='area' series={data.series} options={data.options} width={350} height={250} />
    </div>
  )
}

export default MiniCard