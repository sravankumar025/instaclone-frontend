import React, { useEffect, useState } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import image from "./instaIcon.png";
import camera from "./camera.png";
const Postview = (props) => {
  const [data, setData] = useState(null);
  const fetchAllPosts=async ()=>{
    
    await fetch("https://instaclone-qhpx.onrender.com/all")
                    .then((response) => response.json())
                    .then((data) => setData(data?.result.reverse()));
  }
  useEffect(() => {
    fetchAllPosts()
  }, []);

  if(data==null){
    return <center><h1>Loading...</h1></center>
  }
  return (
    <section>
      <section>
        <div id="div">
          <img className="imag1" src={image} alt="Instagram" height="50px" width="50px"/>
          <h2 className="heading">Instaclone</h2>
          <Link to='/postform'>
            <img className="camera" src={camera} alt="camera" height="38px" width="38px"/>
          </Link>
        </div>
      </section>
      <section>
      {props.val===true?window.location.reload(true):""}
      {
      data?.map?.((item, index) => (
          <div id="card-content" key={index}>
            <div id="head-part">
              <b>{item.username}</b>
              <div className="sub-content">
                {item.address}
                <i className="fa-solid fa-ellipsis fa-lg"></i>
              </div>
            </div>

            <div id="image-content">
             <img className="imgTag" src={`https://instaclone-qhpx.onrender.com/images/${item.image_file}`} key={index} alt="PostImage"/>
            </div>
            <div id="likes-content">
              <i className="fa-regular fa-heart fa-lg"></i>
              <i className="fa-regular fa-paper-plane fa-lg"></i>
              <span className="dateField">{item.date}</span>
            </div>
            <span className="likes">{item.likes} likes</span>
            <div className="desc">
              <b>{item.description}</b>
            </div>
          </div>
        ))}
      </section>
      
    </section>
  );
};

export default Postview;
