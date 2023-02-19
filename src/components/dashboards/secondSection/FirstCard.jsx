import React, { useState } from 'react'
import './secondSection.scss'
import ApexChart from 'react-apexcharts'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { UilTimes } from '@iconscout/react-unicons'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FirstCard = ({ uniqueNumbersSecondSection, indicators }) => {
  
    const valueForCircular =Object.values(uniqueNumbersSecondSection).map(el => el)
    const value = indicators.find(el => el['№ строки'] === 12)
    const [expanded, setExpanded] = useState(false)
   
    return (
      <AnimateSharedLayout>
          {
              expanded
              ? <ExpandedCard setExpanded={() => setExpanded(false)} />
              : <CompactCard valueForCircular={valueForCircular} value={value} setExpanded={() => setExpanded(true)} />
          }
      </AnimateSharedLayout>
    )

}

// CompactCard

function CompactCard ({ valueForCircular, value, setExpanded }) {
    const str = " Количество детских и молодeжных общественных объединений, работающих по данному "
    const CircularValue = Object.values(value).map(el => el)
   
    let textValue = Math.round(CircularValue[9]*100/valueForCircular[5])

    return (
        <motion.div className="compactCard"
        onClick={setExpanded}
        layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar 
                value={textValue}
                text={`${textValue}%`}
                />
                <span>по региону {CircularValue[9]}</span>
                <span>всего {valueForCircular[5]}</span>
            </div>
            <div className="detail">
                <div className='budget'>
                    <span>Бюджет СРФ {CircularValue[5]}</span>
                    <span>Бюджет МО {CircularValue[6]}</span>
                </div>
                <div className="budget">
                    <span>Кол-во грантов {CircularValue[7]}</span>
                    <span>Бюджет грантов {CircularValue[8]}</span>
                </div>
            </div>
        </motion.div>
    )
}

// ExpandedCard

function ExpandedCard ({ setExpanded }) {
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
                name: 'по годам',
                data: [31, 40, 28, 51, 42, 109, 128, 110, 130, 85, 122, 65]
            },
            {
                name: 'Series2',
                data: [11, 32, 45, 32, 34, 52, 41, 25, 30, 48, 50, 34]
            }
        ],
    }

    return (
        <motion.div className="ExpandedCard"
        layoutId='expandableCard'
        >
            <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>title</span>
            <div className="chartContainer">
                <ApexChart type='area' series={data.series} options={data.options} />
            </div>
            <span>Last 24 hours</span>
        </motion.div>
        
    )
}

export default FirstCard