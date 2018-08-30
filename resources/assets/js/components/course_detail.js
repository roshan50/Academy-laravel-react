import React, { Component } from 'react';
import Video_Panel from "./course-detail/Video_Panel";
import Course_Info from "./course-detail/Course_Info";
import Sub_Courses from "./course-detail/Sub_Courses";

export default class Course_Detail extends Component {
    render() {
        return (
            <div>
                <Video_Panel/>
                <div className="container">
                    <Course_Info/>
                    <Sub_Courses/>
                </div>
            </div>
        );
    }
    componentDidMount() {
        require('./../modules/rating');
        require('./../modules/scroll');
        require('./../modules/collapse');
    }
}
