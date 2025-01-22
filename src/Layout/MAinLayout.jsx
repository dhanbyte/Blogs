import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
export default function MAinLayout() {
  return (
    <div className="px-4  md:px-8 lg:px-16 xl:px-16 2xl:px-32">
  
    <Navbar/>
    <Outlet />
    </div>
  )
}
