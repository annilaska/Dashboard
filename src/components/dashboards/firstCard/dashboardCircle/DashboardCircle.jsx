import '../../dashboards.scss'
import { PieChart, Pie, Tooltip } from "recharts";
import { useEffect, useMemo, useState } from 'react';



const DashboardCircle = ({ xl }) => {

const data01 = [ {}, {}, {}, {}, {}, {}]
const data02 = [ {}, {}, {}, {}, {}, {}]
  
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
    el.name = 'Кол-во грантов' + firstRegion[index]["Направления реализации государственной молодeжной политики"]
    el.value = a[index]
  })
   data02.map((el, index) => {
    el.name = 'Бюджет грантов, руб ' + firstRegion[index]["Направления реализации государственной молодeжной политики"]
    el.value = b[index]
  })  

  return (
    <div className="dashBordContainer">
        <PieChart width={300} height={400}>
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
      </PieChart>
    </div>
  );
}

export {DashboardCircle}
