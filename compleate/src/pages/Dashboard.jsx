import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import Users from "../components/Users"


 const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"10,000"} />
           
        </div>
        <Users/>
    </div>
}
export default Dashboard