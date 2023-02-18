import '../../dashboards.scss'
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import { useEffect, useMemo, useState } from 'react';



const DashboardCircle = ({ xl }) => {

  const data01 = [ {}, {}, {}, {}, {}, {}]
  const data02 = [{}, {}, {}, {}, {}, {}]
  const [ empty, setEmpty ] = useState(false)
  
  const firstRegion = xl
    .filter((el, index) => index >= 1 && index <= 6)
    .filter(el => el !== undefined)

  const a = firstRegion
    .map(el => el[" Кол-во грантов "])
    .filter(el => el !== undefined)
  const b = firstRegion
    .map(el => el[" Бюджет грантов, руб "])
    .filter(el => el !== undefined)

   data01.forEach((el, index) => {
    el.name = firstRegion[index]["Направления реализации государственной молодeжной политики"]
    el.value = a[index]
  })
   data02.map((el, index) => {
    el.name = firstRegion[index]["Направления реализации государственной молодeжной политики"]
    el.value = b[index]
   })  
  

  useEffect(() => {
    const dataEmpty = a.filter((el, id) => a.indexOf(el) === id)
    console.log(dataEmpty);
    if (dataEmpty.length === 1 && dataEmpty[0] === 0) {
      setEmpty(true)
    }
    else if(dataEmpty.length === 0){
      setEmpty(true)
    }
    else {
      setEmpty(false)
    }
  },[xl])

  return (
    <div className="dashBordContainer">
      {empty && <h4>В данном регионе отсутствуют гранты по всем направлениям</h4>}
      {empty === false && <PieChart width={300} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={50}
            fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
        <Legend content={<ContentLegend />} margin={{ top: '-20px', left: 20, right: 0, bottom: 0 }}/>
      </PieChart>}
      
    </div>
  );
}

const ContentLegend = () => {
  return (
    <ul>
      <li style={{ color: '#8884d8'}}><span>Кол-во грантов</span></li> {/* <div className="colorExample"/> */}
      <li style={{ color: '#82ca9d' }}><span>Бюджет грантов, руб</span></li>
    </ul>
  )
}

export {DashboardCircle}
