import React,{Component} from 'react';

export default class Course_Level extends Component {
    render() {
        return (
            <div className="course-level d-flex">
                <div className="course-level__img d-none d-lg-block">
                    <img src="images/course.jpg" alt=""/>
                </div>
                <div className="course-level__body">
                    <div className="course-level__title text-secondary  font-weight-bold">دوره شماره 1</div>
                    <div className="course-level__text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </div>
                    <div className="course-level__level" id="accordion">
                        <a data-toggle="collapse" href="#collapse1">
                            <div className="level__header d-flex mdi mdi-format-line-weight text-primary font-weight-bold">
                                <div>4 مرحله</div>
                                <div className="mdi mdi-menu-up-outline"></div>
                            </div>
                        </a>
                        <ul className="level__list list-unstyled collapse " id="collapse1" data-parent="#accordion">
                            <item className="d-flex">
                                <div className="item__icon">
                                    <img src="SVG/play.svg" alt=""/>
                                </div>
                                <div className="d-flex justify-content-between w-100 align-items-center pr-3">
                                    <div className="item__title">مرحله اول</div>
                                    <div className="item__time mdi mdi-clock-outline">21:45</div>
                                </div>
                            </item>
                            <item className="d-flex">
                                <div className="item__icon">
                                    <img src="SVG/play.svg" alt=""/>
                                </div>
                                <div className="d-flex justify-content-between w-100 align-items-center pr-3">
                                    <div className="item__title">مرحله دوم</div>
                                    <div className="item__time mdi mdi-clock-outline">21:45</div>
                                </div>
                            </item>
                            <item className="d-flex">
                                <div className="item__icon">
                                    <img src="SVG/play.svg" alt=""/>
                                </div>
                                <div className="d-flex justify-content-between w-100 align-items-center pr-3">
                                    <div className="item__title">مرحله سوم</div>
                                    <div className="item__time mdi mdi-clock-outline">21:45</div>
                                </div>
                            </item>
                            <item className="d-flex">
                                <div className="item__icon">
                                    <img src="SVG/play.svg" alt=""/>
                                </div>
                                <div className="d-flex justify-content-between w-100 align-items-center pr-3">
                                    <div className="item__title">مرحله چهارم</div>
                                    <div className="item__time mdi mdi-clock-outline">21:45</div>
                                </div>
                            </item>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}