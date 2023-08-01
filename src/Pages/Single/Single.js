import "./Single.css";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Navbar from "../../Component/Navbar/Navbar";
import Chart from "../../Component/Chart/Chart";
import DataTable from "../../DataTable/DataTable";
const Single = () => {
  return (
       <div className="single">
         <Sidebar/>
         <div className="singleContainer">
          <Navbar/>
           <div className="single_top">
               <div className="single_left">
                <div className="editbutton">Edit</div>
                <h1 className="single_title">Information</h1>
                 <div className="single_item">
                  <img 
                   className="itemImage"
                   src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                   alt="" />
                     <div className="details">
                         <h1 className="itemTitle">Smrita Ambani</h1>
                            <div className="detailItem">
                         <span className="itemKey">Email:</span>
                         <span className="itemValue">Padhysiren93@gmail.com</span>
                           </div>
                           <div className="detailItem">
                         <span className="itemKey">Contact:</span>
                         <span className="itemValue">8**98456952</span>
                           </div>
                           <div className="detailItem">
                         <span className="itemKey">Address:</span>
                         <span className="itemValue">Main Road Phulbani Near SBI</span>
                           </div>
                           <div className="detailItem">
                         <span className="itemKey">Country:</span>
                         <span className="itemValue">India</span>
                           </div>
                     </div>
                 </div>
              </div>
               <div className="single_right">
                   <Chart 
                     aspect={3/1}
                     title="User Spending (Last 6 Months)"
                     />
             </div>        
             </div>
             <div className="single_button">
                 <h1 className="single_title"> Last Transaction</h1>
                 <DataTable/>
             </div>
    
          
         </div> 
         
       </div>
  );
};

export default Single;