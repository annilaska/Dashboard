import React  from 'react';
import './Table1.css'
import FirstCard from '../dashboards/secondSection/FirstCard';


export default function MyTable1({filteredCard, xl, handleIndicators, indicators, uniqueNumbers}) {


    return (
        <div className="Table">
    
            <div className='searchValuesBlok'>
                {
                    uniqueNumbers.length
                    ? filteredCard.map(el => <div key={el} value={el} onClick={(el) => handleIndicators(el)} className='searchValue'>{el}</div>)
                    : null
                }
            </div>
             {
                indicators !== null 
                ? <div className="tableContainer">
                    <FirstCard indicators={indicators} />
                </div>
                : null
            } 
        </div>
  )
}



