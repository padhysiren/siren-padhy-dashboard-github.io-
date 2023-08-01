import "./New.css"
import Sidebar from "../../Component/Sidebar/Sidebar"
import Navbar from "../../Component/Navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
const New = ({inputs,title}) => {
  const [file,setFile]=useState("");
 
  return (
  <div className="new">
      <Sidebar/>
      <div className="classContainer">
        <Navbar/>
        <div className="new_top">
          <h1>{title}</h1>
        </div>
          <div className="single_bottom">
                <div className="new_left">
                  <img
                    className="new_img" 
                    src={file
                      ?URL.createObjectURL(file)
                      :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                    alt="" />
                    <form className="chooseFile">
                        <label htmlFor="files">
                         <DriveFolderUploadOutlinedIcon/>
                         </label>
                         <input type="file" id="files" onChange={e=>setFile(e.target.files[0])}/>
                    </form>
                </div>
                <div className="new_right">
                 <form >
               
                 {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.yesplaceholder} />
                </div>
              ))}
        
                      {/* <div className="formInput">
                         <label>UserName</label>
                         <input type="text" placeholder="Siren Padhy" />
                      </div>
                      <div className="formInput">
                         <label>Name and SurName </label>
                         <input type="text" placeholder="Siren  Padhy" />
                      </div>
                      <div className="formInput">
                         <label>Email</label>
                         <input type="text" placeholder="padhysiren93@gmail.com" />
                      </div>
                      <div className="formInput">
                         <label>Phone</label>
                         <input type="text" placeholder="Siren Padhy" />
                      </div>
                      <div className="formInput">
                         <label>Password</label>
                         <input type="password" />
                      </div>
                      <div className="formInput">
                         <label>Address</label>
                         <input type="text" placeholder="Main Road Phulbani" />
                      </div>
                      <div className="formInput">
                         <label>State</label>
                         <input type="text" placeholder="State" />
                      </div>
                      <div className="formInput">
                         <label>Country</label>
                         <input type="text" placeholder="India" />
                      </div> */}
                           <button >Send</button>
                 </form>
                </div>
          </div>

      </div>
    </div>
  )
}

export default New