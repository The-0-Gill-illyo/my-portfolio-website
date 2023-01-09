//Page Imports
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import "./WorkCardStyles.css";

//Other Imports
import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Pojects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
)
}

export default Work;