
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRouters = () => {
const trainer  = useSelector( state => state.trainer)  

    if(trainer.length>=3){
        return  <Outlet/>
    }
    else{
            return (<Navigate to='/'/>)

        }
}

export default ProtectedRouters
