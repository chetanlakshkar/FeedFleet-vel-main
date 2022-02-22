import React, { Component } from "react";
import { activateAuthLayout } from "../../store/actions";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ReactMediaRecorder } from "react-media-recorder";


const Createfleetvideo = () => (
  
  
  <div>
    <ReactMediaRecorder
      video
      render={({  startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="text-center container">
            <h1>
          <b>Welcome to Intro Video</b>
        </h1>
        <br />
        <div>
          Welcome to Feedfleet, where you'll be able to create & manage
          <br />
          all your Intro Video videos, and generate your Video Widget code
        </div>
        <br />
         
         <div className="col-md-12 vertical-center ">
          <button type="button" className="btn btn-primary" onClick={startRecording}>
            <i className="fa fa-video-camera icon_cam"></i>
            <br />
            <br />
            Start Recording
          </button>
        </div>
        <br />
        <div className="col-md-12 vertical-center ">
        <button type="button" className="btn btn-primary " onClick={stopRecording}>
            <i className="fa fa-upload icon_cam"></i>
            <br />
            <br />
            stopRecording
          </button>
          </div>
          <video className="m-5" src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
  </div>
);



export default withRouter(
  connect(null, { activateAuthLayout })(Createfleetvideo)
);
