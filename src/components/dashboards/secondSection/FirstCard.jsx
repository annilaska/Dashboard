import React from 'react'
import './secondSection.scss'
import ApexChart from 'react-apexcharts'
import { motion, AnimateSharedLayout } from 'framer-motion'

const FirstCard = () => {

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
                    "2022/01/19",
                    "2022/02/19",
                    "2022/03/19",
                    "2022/04/19",
                    "2022/05/19",
                    "2022/06/19",
                    "2022/07/19",
                    "2022/08/19",
                    "2022/09/19",
                    "2022/10/19",
                    "2022/11/19",
                    "2022/12/19",
                ]
            }
        },
        series: [
            {
                name: 'Series1',
                data: [31, 40, 28, 51, 42, 109, 128, 110, 130, 85, 122, 65]
            },
            {
                name: 'Series2',
                data: [11, 32, 45, 32, 34, 52, 41, 25, 30, 48, 50, 34]
            }
        ],
    }

    return (
        <>
            <motion.div className="compactCard" >
                <ApexChart type='area' series={data.series} options={data.options} width={350} height={250}/>
            </motion.div>
            <motion.div className="compactCard">
                <ApexChart type='area' series={data.series} options={data.options} width={350} height={250}/>
            </motion.div>
        </>
    )
}

export default FirstCard