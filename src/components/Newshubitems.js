import React from "react";
const Newshubitems =(props)=>{

  
    let {title,description,urlofNews,imageurl,authorofnews,date,source}=props;
    return (
      <div className="container" >
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}><span className={`badge rounded-pill bg-${props.modeText==="light"?"danger":"dark"}`}> {source} </span></div>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body" style={{backgroundColor: props.modeText==='dark'? 'Grey': 'white', color:props.modeText=== 'dark'?'white': 'black'}}>
           <h5 className="card-title">{title} </h5>
            <p className="card-text">
              {description}
            </p>
            <a href={urlofNews} target="_blank"   className={`btn btn-${props.modeText==="light"?"primary":"dark"}`}>
              Read More
            </a>
            <p className={`card-text my-1 `} ><small className={`text-body-secondary text-${props.modeText==="light"?"dark":"light"}`}>- By      {authorofnews} on {date}</small></p>
          </div>
        </div>
      </div>
    );
  
}

export default Newshubitems;
