import "./Home.css"
import Sidebar from "../../Component/Sidebar/Sidebar"
import Navbar from "../../Component/Navbar/Navbar"
import Widget from "../../Component/Widget/Widget"
import Featured from "../../Component/Featured/Featured"
import Chart from "../../Component/Chart/Chart"
import Table from "../../Component/Table/Table"
const Home = () => {
  return (
    <div className = "home">
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
              <Widget type="users"/>
              <Widget type="order"/>
              <Widget type="earning"/>   
              <Widget type="balance"/>
        </div>
        <div className="charts">
             <Featured/>
             <Chart 
              aspect={2/1}
              title="Last 6 Months (Revenue)"
              />
        </div>
        <div className="listContainer">
              <div className="listTitle">Latest Transaction</div>
               <Table/>
        </div>
       </div>
    </div>
  )
}

export default Home