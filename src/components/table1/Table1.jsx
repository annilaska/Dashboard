import React  from 'react';
import './Table1.css'
import { FirstCard } from '../dashboards/firstCard/FirstCard';


export default function MyTable1({filteredCard, xl, handleIndicators, indicators, uniqueNumbers}) {


    return (
        <div className="Table">
    
            <div className='searchValuesBlok'>
                {
                    uniqueNumbers.length
                    ? filteredCard.map(el => <div value={el} onClick={(el) => handleIndicators(el)} className='searchValue'>{el}</div>)
                    : null
                }
            </div>
            MyTable1
             {
                indicators !== null 
                ? <div className="tableContainer">
                    <FirstCard xl={xl[0]} indicators={indicators} />
                </div>
                : null
            } 
        </div>
  )
}



