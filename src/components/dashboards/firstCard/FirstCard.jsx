import { DashboardCircle } from "../firstCard/dashboardCircle/DashboardCircle"
import { DashboardColumn } from "../firstCard/dashboardColumn/DashboardColumn"
import MiniCard from "../firstCard/miniCard/MiniCard"

const FirstCard = ({indicators}) => {

    return (
        <>
            <MiniCard xl={indicators} />
            <DashboardCircle xl={indicators}/>
            <DashboardColumn xl={indicators} />
            
        </>
    )

}
  
export {FirstCard}