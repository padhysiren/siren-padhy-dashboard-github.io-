import "./List.css"
import Sidebar from "../../Component/Sidebar/Sidebar"
import Navbar from "../../Component/Navbar/Navbar"
import DataTable from "../../DataTable/DataTable"
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="con">
        <Navbar/>
        <DataTable/> 
      </div>
    </div>
  )
}

export default List