import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";



function ProgressBar() {
  
  return (
    <div className="container" style={{marginTop:'50px'}}>
        <div className="row">
            <div className="col-lg-4">
    <CircularProgressbarWithChildren
      value='0'
      circleRatio={1}
      styles=
      {buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "round",
        pathColor: "#190638",
        trailColor: "#4ee863"
      })}
    >
      <div className={"circular-progress-container__scoreValue"}><h1>1 in 5</h1></div>
    
    </CircularProgressbarWithChildren>
    <div style={{textAlign:'center',color:'rgb(99, 99, 99)',padding:'30px'}}>20% of women who have been pregnant will suffer from a Perinatal Mood or Anxiety Disorder</div>
    </div>
    <div className="col-lg-4">
    <CircularProgressbarWithChildren
      value='0'
      circleRatio={1}
      styles=
      {buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "round",
        pathColor: "#190638",
        trailColor: "#4ee863"
      })}
    >
      <div className={"circular-progress-container__scoreValue"}><h1>$6 Billion</h1></div>
      
    </CircularProgressbarWithChildren>
    <div style={{textAlign:'center',color:'rgb(99, 99, 99)',padding:'30px'}}>$6 Billion:
The approximate cost (lost potential earnings) of not treating Perinatal Mood and Anxiety Disorders in America in 2016</div>
    </div>
    <div className="col-lg-4">
    <CircularProgressbarWithChildren
      value='26'
      circleRatio={1}
      styles=
      {buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "round",
        pathColor: "#190638",
        trailColor: "#4ee863"
      })}
    >
      <div className={"circular-progress-container__scoreValue"}><h1>26 %</h1></div>
      
    </CircularProgressbarWithChildren>
    <div style={{textAlign:'center',color:'rgb(99, 99, 99)',padding:'30px'}}>Increase in the Maternal Mortality Rate in the United States from 2000-2014</div>
    </div>
    <div className="col-lg-4">
    <CircularProgressbarWithChildren
      value='93'
      circleRatio={1}
      styles=
      {buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "round",
        pathColor: "#190638",
        trailColor: "#4ee863"
      })}
    >
      <div className={"circular-progress-container__scoreValue"}><h1>93 %</h1></div>
      
    </CircularProgressbarWithChildren>
    <div style={{textAlign:'center',color:'rgb(99, 99, 99)',padding:'30px'}}>93% of women suffering from Postpartum Depression do not or cannot get the right help</div>
    </div>
    <div className="col-lg-4">
    <CircularProgressbarWithChildren
      value='0'
      circleRatio={1}
      styles=
      {buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "round",
        pathColor: "#190638",
        trailColor: "#4ee863"
      })}
    >
      <div className={"circular-progress-container__scoreValue"}><h1>Every 25<br/> Minutes</h1></div>
      
    </CircularProgressbarWithChildren>
    <div style={{textAlign:'center',color:'rgb(99, 99, 99)',padding:'30px'}}>1 baby is born suffering from Opiate Withdrawal</div>
    </div>
    <div className="col-lg-4">
    <CircularProgressbarWithChildren
      value='50'
      circleRatio={1}
      styles=
      {buildStyles({
        rotation: 1 / 2 + 1 / 8,
        strokeLinecap: "round",
        pathColor: "#190638",
        trailColor: "#4ee863"
      })}
    >
      <div className={"circular-progress-container__scoreValue"}><h1>50 %</h1></div>
      
    </CircularProgressbarWithChildren>
    <div style={{textAlign:'center',color:'rgb(99, 99, 99)',padding:'30px'}}>Up to 50% of individuals with Postpartum Depression are never detected</div>
    </div>
    </div>
    
    </div>
  );
}

export default ProgressBar;
