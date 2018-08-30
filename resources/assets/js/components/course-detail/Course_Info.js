import React,{Component} from 'react';

export default class Course_Info extends Component{
    render(){
        return(
            <div className="main-course-card d-flex flex-column flex-lg-row">
                <div className="course-about border-lg-left">
                    <h1 className="course-about__title">دوره مقدماتی فتوشاپ</h1>
                    <p className="mb-4">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                    <div className="course-about__footer d-flex flex-column flex-lg-row justify-content-between">
                        <div className="cost d-flex justify-content-between text-primary pt-3 col-12 col-lg-4">
                            <div className="cost__title mdi mdi-cash">قیمت دوره</div>
                            <div>
                                <span className="font-weight-bold">365/000</span>
                                تومان
                            </div>
                        </div>
                        <button className="btn-purchase mdi mdi-cart-plus col-lg-4 col-8 mt-3 mt-lg-0">
                            خرید دوره
                        </button>
                    </div>
                </div>
                <ul className="course-info list-unstyled mt-3 mt-lg-0 pt-3 pt-lg-0">
                    <li className="mdi mdi-account-multiple-outline d-flex">
                        <div className="d-flex justify-content-between w-100 pr-1">
                            <div>تعداد دانشجو</div>
                            <div>25</div>
                        </div>
                    </li>
                    <li className="mdi mdi-comment-question-outline d-flex">
                        <div className="d-flex justify-content-between w-100 pr-1">
                            <div>تعداد سوالات</div>
                            <div>12</div>
                        </div>
                    </li>
                    <li className="mdi mdi-timer d-flex">
                        <div className="d-flex justify-content-between w-100 pr-1">
                            <div>مدت زمان دوره</div>
                            <div>3:21:16</div>
                        </div>
                    </li>
                    <li className="mdi mdi-book-open-variant d-flex">
                        <div className="d-flex justify-content-between w-100 pr-1">
                            <div>تعداد دروس</div>
                            <div>21</div>
                        </div>
                    </li>
                    <li className="mdi mdi-calendar-range d-flex">
                        <div className="d-flex justify-content-between w-100 pr-1">
                            <div>تاریخ انتشار</div>
                            <div>1397/04/23</div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}