import { DashboardCircle } from "../firstCard/dashboardCircle/DashboardCircle"
import { DashboardColumn } from "../firstCard/dashboardColumn/DashboardColumn"
import MiniCard from "../firstCard/miniCard/MiniCard"

const FirstCard = ({xl}) => {

    return (
        <>
            <DashboardCircle xl={xl}/>
            <DashboardColumn xl={xl}/>
            <MiniCard xl={xl}/>
        </>
    )

}
  
export {FirstCard}