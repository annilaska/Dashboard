import {
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from "recharts";
import '../../dashboards.scss'
  

  
const DashboardColumn = ({ xl }) => {

  const data = [ {}, {}, {}, {}, {}, {}]
    
  const firstRegion = xl
    .filter((el, index) => index >= 1 && index <= 6)
    .filter(el => el !== undefined)
  
  const a = firstRegion
    .map(el => el[" Бюджет СРФ, руб "])
    .filter(el => el !== undefined)
  const b = firstRegion
    .map(el => el[" Бюджет МО, руб "])
    .filter(el => el !== undefined)
  
  data.map((el, index) => {
    el.name = firstRegion[index]["Направления реализации государственной молодeжной политики"]
    el["Бюджет СРФ"] = a[index]
    el["Бюджет МО"] = b[index]
  })

    return (
      <div className="dashBordContainer" style={{marginLeft: '35px'}}>
          <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 40,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Бюджет СРФ" fill="#8884d8" />
            <Bar dataKey="Бюджет МО" fill="#050bfb" />
          </BarChart>
      </div>
    )

}
  
  export {DashboardColumn}