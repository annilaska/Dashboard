import React, { useRef, useState} from 'react';

import * as XLSX from 'xlsx'
import './Table.css'
import MiniCard from '../dashboards/miniCard/MiniCard';
import { DashboardColumn } from '../dashboards/dashboardColumn/DashboardColumn'
import { DashboardCircle } from '../dashboards/dashboardCircle/DashboardCircle'

export default function MyTable() {

    const [xl, setXl] = useState(null)
    const selektButton = useRef()


    const handlePick = (e) => {
        selektButton.current.click()
    }

    const handleChange = (e) => {
        const file = e.target.files[0]
        readExcel(file)
    }
    

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
    //console.log(xl)


  return (
    <div className="Table">
        <label>
            <input className="downloadInput" type="file" ref={selektButton} onChange={handleChange} accept=".xlsx"/>
            <button className="downloadBtn" onClick={handlePick}>Загрузить Excel файл</button>
        </label>
        {
            xl !== null 
                  ?
                <div className="tableContainer">
                    <MiniCard xl={xl[0]} />
                    <DashboardCircle xl={xl[0]} />
                    <DashboardColumn xl={xl[0]} />
                </div>
                : null
        }
    </div>
  )
}



