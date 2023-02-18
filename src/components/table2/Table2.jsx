import React  from 'react';
import './Table2.css'
import SecondCard from '../dashboards/secondSection/SecondCard';


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
                      ?
                        <div className="tableContainer">
                            <SecondCard indicators={indicators} />
                        </div>
                : null
            } 
        </div>
  )
}



