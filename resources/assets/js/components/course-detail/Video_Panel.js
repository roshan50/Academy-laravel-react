import React, {Component} from 'react';
import Video_Card from "./Video_Card";

export default class Video_Panel extends Component{
    render(){
        return(
            <div className="container-fluid bg-primary">
                <div className="container d-flex flex-lg-row flex-column">
                    <div className="course-video">
                        <video className="video"  controls>
                            <source src="videos/mov_bbb.mp4" type="video/mp4" />
                                <source src="videos/mov_bbb.ogg" type="video/ogg" />
                                    Your browser does not support HTML5 video.
                        </video>
                    </div>

                    <div className="video-list">
                        <h1 className="video-list__title mdi mdi-link-variant">ویدئوهای مرتبط</h1>
                        <div className="video-list-group" id="scroll">
                            <a href="#" className="video-list-group-item">
                               <Video_Card/>
                            </a>
                            <a href="#" className="video-list-group-item">
                                <Video_Card/>
                            </a>
                            <a href="#" className="video-list-group-item">
                                <Video_Card/>
                            </a>
                            <a href="#" className="video-list-group-item">
                                <Video_Card/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}