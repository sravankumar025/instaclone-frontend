import { useState } from "react";
import { Link } from "react-router-dom";
import image from "./instaIcon.png";
import camera from "./camera.png";
import "./postform.css";
const Postview = () => {

    const [username,setUsername]=useState('');
    const [address,setAddress]=useState('');
    const [imageFile,setImageFile]=useState('');
    const [description,setDescription]=useState('');


    const uploadPost=()=>{
     
        const formdata=new FormData();
        formdata.append("username",username);
        formdata.append("address",address);
        formdata.append("image_file",imageFile);
        formdata.append("description",description);

        fetch("https://instaclone-qhpx.onrender.com/api",{
            method:"POST",
            body:formdata
        })
    }
    function HandleBrowseClick()
    {
      var fileinput = document.getElementById("browse");
      fileinput.click();
    }  

    function Handlechange(e)
    {
      var fileinput = document.getElementById("browse");
      var textinput = document.getElementById("filename");
      textinput.value = fileinput.value;
      setImageFile(e.target.files[0])
    }


  return (
    <div>
      <section>
        <div id="div">
          <img className="imag1" src={image} alt="Instagram" height="50px" width="50px"/>
          <h2 className="heading">Instaclone</h2>
            <img className="camera" src={camera} alt="camera" height="40px" width="40px"/>
        </div>
      </section>
      <section id="form-container">
          <div className="browsebtn">
          <input type="file" id="browse" name="fileupload" style={{display: "none"}} onChange={Handlechange}/>
          <input type="text" id="filename" readOnly={true} placeholder="No File Choosen"/>
          <input type="button" value="Browse" id="fakeBrowse" onClick={HandleBrowseClick}/>
          </div>
        <div className="user">
        <input className="author" placeholder="Author"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input className="location" placeholder="Location"  value={address} onChange={(e)=>setAddress(e.target.value)}/><br/>
        </div>
        <input className="description" placeholder="Description"  value={description} onChange={(e)=>setDescription(e.target.value)}/><br/>
        <Link to='/postview'>
          <button className="btn" onClick={uploadPost}>Post</button>
        </Link>
      </section>
    </div>
  );
};
export default Postview;
