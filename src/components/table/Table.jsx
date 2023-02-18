import React, { useRef, useState} from 'react';

import * as XLSX from 'xlsx'
import './Table.css'
import { UilSearch } from '@iconscout/react-unicons'
import { FirstCard } from '../dashboards/firstCard/FirstCard';


export default function MyTable() {

// загружаем excel
    const selektButton = useRef()
    const handlePick = (e) => {
        selektButton.current.click()
    }
    const handleChange = (e) => {
        const file = e.target.files[0]
        readExcel(file)
    }
    
//  парсим excel
    const [xl, setXl] = useState(null)
    const readExcel = (file) => {

        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsArrayBuffer(file)
            fileReader.onload = (e) => {
                const bufferArray = e.target.result
                const workBook = XLSX.read(bufferArray, { type: 'buffer' })

                const workSheetName = workBook.SheetNames.map((elName, indexName) => {
                    const workSheetKey = workBook.Sheets[elName]
               
                    const data = XLSX.utils.sheet_to_json(workSheetKey)
                    return data
                })
                resolve(workSheetName)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
        promise.then((d) => {
            setXl(d)
        })
    
    }
//поиск по региону
    const [searchValue, setSearchValue] = useState('')

    let name = xl !== null ? xl[0].map(el=> el['Регион'] ) : null
    const newSet = new Set(name)
    const uniqueNumbers = Array.from(newSet)

    let filteredCard = xl !== null ? uniqueNumbers.filter(item => {
        return item.toLowerCase().includes(searchValue)
    }) : null


    const [indicators, setIndicators] = useState(null)  //показатели по выбранному региону
    const handleIndicators = (el) => {
        let content = el.target.getAttribute('value').toLowerCase()
        const selectRegion = xl !== null ? xl[0].filter(item => item['Регион'].toLowerCase() === content) : null
        setIndicators(selectRegion)
    }
   


    return (
        <div className="Table">
            <label className='download'>
                <input className="downloadInput" type="file" ref={selektButton} onChange={handleChange} accept=".xlsx"/>
                <button className="downloadBtn" onClick={handlePick}>Загрузить Excel файл</button>
            </label>
            <div className='searcBlock'>
                <input className="search" onChange={(e) => setSearchValue(e.target.value)} placeholder='введите регион' type='text' />
                <UilSearch className="searchIcon" />
            </div>
            <div className='searchValuesBlok'>
                {
                    uniqueNumbers.length
                    ? filteredCard.map(el => <div value={el} onClick={(el) => handleIndicators(el)} className='searchValue'>{el}</div>)
                    : null
                }
            </div>
            
             {
                indicators !== null 
                      ?
                        <div className="tableContainer">
                        <FirstCard xl={xl[0]} indicators={indicators} />
                        </div>
                : null
            } 
        </div>
  )
}



