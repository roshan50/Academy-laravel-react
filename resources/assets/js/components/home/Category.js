import React, {Component} from 'react';
import Category_Card from "./Category_Card";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {color: '', icon: ''};
    }
    componentDidMount(){
        axios.get('http://localhost:8000/categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
        require('./../../modules/flickity');
    }
    categoryCard(){
        if(this.state.categories instanceof Array){
            return this.state.categories.map(function(object, i){
                return <Category_Card obj={object} key={i} />;
            })
        }
    }
    render() {
        return (
            <div className="category">
                <div className="d-flex justify-content-between">
                    <div className="title d-flex">
                        <div className="title__icon">
                            <img src="images/category.png" alt=""/>
                        </div>
                        <div className="title__body">
                            <h1>دسته بندی</h1>
                            <div className="text">شما میتوانید دوره آموزشی خود را از دسته بندی زیر انتخاب کنید</div>
                        </div>
                    </div>
                    <div className="arrows d-flex">
                        <div className="arrow-right mdi mdi-arrow-right-drop-circle-outline pointer"></div>
                        <div className="arrow-left mdi mdi-arrow-left-drop-circle-outline pointer"></div>
                    </div>
                </div>
                <div className="main-carousel d-flex  content" data-flickity='{ "cellAlign": "left", "contain": true }'>
                    {this.categoryCard()}
                </div>
            </div>
        )
    }
}
export default Category;