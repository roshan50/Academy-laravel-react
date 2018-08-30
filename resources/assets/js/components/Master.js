import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main_Menu from './header/main_menu';
import Home from './home';
import Courses from './course_detail';
import Profile from './profile';
import Login_Page from './login_page';
import Footer from './footer/footer';


class Master extends Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Main_Menu/>
                        <div>
                            <Route exact  path="/" component={Home}/>
                            <Route  path="/course-detail" component={Courses}/>
                            <Route exact  path="/profile" component={Profile}/>
                            <Route  path="/login" component={Login_Page}/>
                        </div>
                    </div>
                </Router>

                <Footer/>
            </div>
        )
    }
}
export default Master;