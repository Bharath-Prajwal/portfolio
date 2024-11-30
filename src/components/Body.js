import React from "react";
import "./body.css";

function Body() {
  return (
    <section id="body">
    <div>
      <div className="Bodymain">
        <img
          src={require("../images/Bharath.png")}
          alt="Logo"
          id="Bharathimage"
        />
        <div className="Bodycontent">
          <p className="content1">Hii!</p>
          <p className="content2">I am Bharath</p>
          <p className="content3">passionate in Software development</p>
          
        </div>
      </div>
      <a href="https://drive.google.com/file/d/1VwhKNdxXOJxEy0iOWD99Qb_tHzulGMq1/view?usp=drivesdk" className="Resume">Resume</a>
    </div>
    </section>
  );
}

export default Body;
