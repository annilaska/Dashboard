import React, { useMemo, useState } from 'react'
import './secondSection.scss'
import ApexChart from 'react-apexcharts'
import { Box, InputLabel, MenuItem, Select, FormControl } from '@mui/material'
import {
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from "recharts";

const SecondCard = ({ indicators }) => {

    const [direction, setDirection] = useState('');

    const directions =  useMemo(() =>indicators
        .map((el, index) => el["Направления реализации государственной молодeжной политики"]), [indicators])
    
    const handleChange = (event) => {
      setDirection(event.target.value);
    };
  
    const firstRegion = useMemo(() =>   indicators
        .filter((el, index) => el["Направления реализации государственной молодeжной политики"] === direction),[direction,indicators])
    
    const a = firstRegion
        .map(el => el[" Количество детских и молодeжных общественных объединений, работающих по данному  "])
        .filter(el => el !== undefined)
    const b = firstRegion
        .map(el => el[" Численность молодeжи, задействованной в программных мероприятиях по направлению "])
        .filter(el => el !== undefined)
    
    const c = firstRegion
        .map(el => el[" Бюджет СРФ, руб "])
        .filter(el => el !== undefined)
    const d = firstRegion
        .map(el => el[" Бюджет МО, руб "])
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
            ],
            series2: [
                {
                    name: 'Бюджет СРФ, руб',
                    data: c
                },
                {
                    name: 'Бюджет МО, руб',
                    data: d
                }, 
            ]
    }

    const data2 = [{}]
    const data3 = [ {}]

    data2
        .map((el, index) => {
            el.name = direction
            el["Бюджет СРФ"] = c[index]
            el["Бюджет МО"] = d[index]
        })
        .filter(el => el !== undefined)
    
    data3
        .map((el, index) => {
            el.name = direction
            el["Количество молодeжных объединений"] = a[index]
            el["Численность молодeжи в программных мероприятиях"] = b[index]
        })
        .filter(el => el !== undefined)
     
    

return (
    <div className='containerApex'>
        <Box sx={{ minWidth: 300 }} marginTop={9}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Направления реализации</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={direction}
                    label="Направления реализации"
                    onChange={handleChange}
                >
                    {directions.map(el => <MenuItem value={el}>{el}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
        <div className="tableContainer">
            
            
            <BarChart
                width={500}
                height={300}
                data={data2}
                margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Бюджет СРФ" fill="#8884d8" />
                <Bar dataKey="Бюджет МО" fill="#050bfb" />
            </BarChart> 

            <BarChart
                width={500}
                height={300}
                data={data3}
                margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Количество молодeжных объединений" fill="#8884d8" />
                <Bar dataKey="Численность молодeжи в программных мероприятиях" fill="#050bfb" />
            </BarChart> 
        </div>
    </div>
)
}

export default SecondCard