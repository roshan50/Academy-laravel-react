import React, { Component } from 'react';
import Courses from './home/Courses';
import Category from "./home/Category";
import Banner from "./home/Banner";
import Search from "./home/Search";
import Update_Courses from "./home/Update_Courses";


export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Search/>
                <div className="container">
                    <Courses/>
                    <Category/>
                   <Update_Courses/>
                </div>
                {/*@push('scripts')*/}
                {/*<script src="./../modules/flickity.js"></script>*/}
                {/*@endpush*/}
            </div>
        );
    }
}
