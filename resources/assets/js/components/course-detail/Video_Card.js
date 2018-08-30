import React, {Component} from 'react';

export default class Video_Card extends Component{
    render(){
        return(
        <div className="video-card">
            <div className="video-card__title">لورم ایپسوم متن ساختگی با تولید سادگی</div>
            <div className="video-card__body d-flex">
                <img className="video-card__img" src='images/video.jpg' />
                    <div>
                        <p className="video-card__text mdi mdi-school">محمدرضا عابدینی</p>
                        <p className="video-card__text mdi mdi-clock-outline">1 ساعت و 23 دقیقه</p>
                    </div>
            </div>
        </div>
        )
    }
}