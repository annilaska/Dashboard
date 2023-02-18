import React from 'react'
import './secondSection.scss'
import ApexChart from 'react-apexcharts'

const SecondCard = ({ indicators }) => {
  
  const firstRegion = indicators
    .filter((el, index) => index === 7 || index === 8)
  
    const a = firstRegion
        .map(el => el[" Количество детских и молодeжных общественных объединений, работающих по данному  "])
        .filter(el => el !== undefined)
     const b = firstRegion
        .map(el => el[" Численность молодeжи, задействованной в программных мероприятиях "])
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
                  /* type: 'string',
                  categories: ['Социализация молодeжи, нуждающейся в особой заботе государства'], */
                  labels:{
                    show: false
                  }  
              },
          },
          series: [
              {
                  name: 'Количество детских и молодeжных общественных объединений',
                  data: a
              },
              {
                  name: 'Численность молодeжи, задействованной в программных мероприятиях',
                  data: b
              }, 
          ]
      }

return (
    <div className='containerApex'>
      <h4>Количество детских и молодeжных общественных объединений и численность задействованной молодежи</h4>
      <div className="compactCard" >
        <ApexChart type='area' series={data.series} options={data.options} width={350} height={250}/>
      </div>
    </div>
)
}

export default SecondCard