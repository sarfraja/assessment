import React from 'react';
import Header from '../Header'

import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Header />

            <div className={classes.Content} style={{marginTop:'70px'}}>
                <div className={classes.SubContent} >
                    <h1 style={{fontSize:'4vw'}}>THE WILDERMAN FUND </h1>
                    <h1 style={{fontSize:'3vw'}}>Supporting Advancements in Education, Outreach, Research and Prevention For Perinatal Mood and Anxiety Disorders.</h1>
                    <button type="button" style={{width:'230px',height:'70px',borderRadius:'50px'}} className="btn btn-outline-dark">WATCH VIDEO</button>
                   <div className="container" style={{marginTop:'50px'}}>
                       <div className="row" style={{textAlign:'center'}}>
                           <div className="col-lg-4" >
                                <h1 style={{fontSize:'1.6rem'}}>EDUCATE</h1>
                                <p style={{fontSize:'1.2rem'}}>Increase Provider level education and awareness through clinical trainings, and provide PMAD-specific resources </p>
                           </div>
                           <div className="col-lg-4">
                                <h1 style={{fontSize:'1.6rem'}}>FUND</h1>
                                <p style={{fontSize:'1.2rem'}}>Aid in the financial costs related to the education and treatment of PMADs</p>
                           </div>
                           <div className="col-lg-4">
                                <h1 style={{fontSize:'1.6rem'}}>ADVANCE</h1>
                                <p style={{fontSize:'1.2rem'}}>Forward the field through clinical trials and advances in education and research</p>
                           </div>
                       </div>
                   </div><br />
                   <hr style={{backgroundColor:'white', height:'3px'}} />
                   <img src="drop-down.png" style={{backgroundColor:'white',height:'50px',width:'50px'}} alt="image2" />
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo
