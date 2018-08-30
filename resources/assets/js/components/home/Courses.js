import React, {Component} from 'react';
import Course from "./Course";

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {color: '', icon: ''};
    }
    componentDidMount(){
        axios.get('http://localhost:8000/courses')
            .then(response => {
                this.setState({ courses: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    courseCard(){
        if(this.state.courses instanceof Array){
            return this.state.courses.map(function(object, i){
                return <Course obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="new-course">
                <div className="title d-flex">
                    <div className="title__icon">
                        <img src="images/new.png" alt=""/>
                    </div>
                    <div className="title__body">
                        <h1>دوره های جدید</h1>
                        <div className="text">دوره های جدیدی که برایتان تدارک دیدیم را میتوانید اینجا ببینید و استفاده کنید</div>
                    </div>
                </div>
                <div className="content row d-flex flex-wrap flex-lg-nowrap justify-content-lg-between">
                    {this.courseCard()}
                </div>
            </div>
        )
    }
}
export default Courses;

