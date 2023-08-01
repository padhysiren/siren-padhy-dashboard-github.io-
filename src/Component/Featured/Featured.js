import "./Featured.css"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <div className="titles">Total Revenue</div>
                 <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
               <CircularProgressbar value={70} text="70%" strokeWidth={4}/>
          </div>
          <p className="chart_title">Total sales made today</p>
          <p className="amount">Rs420</p>
          <p className="desc">
          Previous transactions processing. Last payments may not be included.
         </p>
        <div className="summary">
            <div className="item">
              <div className="itemTarget">Target</div>
                <div className="itemResult negative">
                      <KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultAmount">Rs 120</div>
                </div>
            </div>
            <div className="item">
              <div className="itemTarget">Target</div>
                <div className="itemResult positive">
                      <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                    <div className="resultAmount">Rs 100</div>
                </div>
            </div>
            <div className="item">
              <div className="itemTarget">Target</div>
                <div className="itemResult positive">
                      <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                    <div className="resultAmount">Rs 440</div>
                </div>
            </div>
        </div>
         
        
     </div>
  </div>
  )
}

export default Featured