import React,{Component} from 'react';
import Course_Level from "./Course_Level";
import Rate from "../utils/Rate";

export default class Sub_Courses extends Component{
    render(){
        return(
            <div className="sub-course-card d-flex flex-column flex-lg-row">
                <ul className="courses col-xs-12 col-lg-8  order-1 order-lg-0 list-unstyled border-lg-left">
                    <li>
                        <Course_Level/>
                    </li>
                    <li>
                        <Course_Level/>
                    </li>
                    <li>
                        <Course_Level/>
                    </li>
                </ul>
                <div className="teacher col-xs-12 col-lg-4 order-0 order-lg-1">
                    <div className="teacher__header d-flex flex-column align-items-center flex-lg-row align-items-lg-baseline">
                        <div className="teacher__img">
                            <img src="images/author.png" alt=""/>
                        </div>
                        <div className="teacher__title pr-2">
                            <div className="teacher__name">محمدرضا عابدینی</div>
                            <Rate/>
                        </div>
                    </div>
                    <div className="teacher__body">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را داشته باشند.
                    </div>
                    <ul className="teacher__footer list-unstyled">
                        <li className="d-flex">
                            <div className="mdi mdi-account-multiple-outline text-info"></div>
                            <div className="d-flex justify-content-between w-100">
                                <div>تعداد دانشجویان</div>
                                <div>126</div>
                            </div>
                        </li>
                        <li className="d-flex">
                            <div className="mdi mdi-heart-outline text-danger"></div>
                            <div className="d-flex justify-content-between w-100">
                                <div>تعداد علاقمندی ها</div>
                                <div>62</div>
                            </div>
                        </li>
                        <li className="d-flex">
                            <div className="mdi mdi-trophy-award text-warning"></div>
                            <div className="d-flex justify-content-between w-100">
                                <div>تعداد آرا</div>
                                <div>58</div>
                            </div>
                        </li>
                        <li className="d-flex text-success bg-light-green">
                            <div className="mdi mdi-trophy-outline"></div>
                            <div className="d-flex justify-content-between w-100">
                                <div>میزان رضایت دانشجویان</div>
                                <div>96%</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}