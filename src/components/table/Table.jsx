import React  from 'react';
import './Table.css'
import { FirstCard } from '../dashboards/firstCard/FirstCard';


export default function MyTable({filteredCard, xl, handleIndicators, indicators, uniqueNumbers}) {


    return (
        <div className="Table">
    
            <div className='searchValuesBlok'>
                {
                    uniqueNumbers.length
                    ? filteredCard.map(el => <div key={el} value={el} onClick={(el) => handleIndicators(el)} className='searchValue'>{el}</div>)
                    : null
                }
            </div>
            Раздел 1
             {
                indicators !== null 
                      ?
                        <div className="tableContainer">
                            <FirstCard indicators={indicators} />
                        </div>
                : null
            } 
        </div>
  )
}



