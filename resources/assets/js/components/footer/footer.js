import React, { Component } from 'react';
import Payment from "./Payment";
import Social from "./Social";
import Contact from "./Contact";
import Bottom_Menu from "./Bottom_Menu";

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="footer">
                    <div className="footer__top d-flex">
                        <div className="br-b-just mr-l-20"></div>
                        <div className="brand">
                            <img src="images/brand.png" alt=""/>
                        </div>
                        <div className="br-b-just mr-r-20"></div>
                    </div>

                    <div className="footer__context d-lg-flex br-b">
                        <div className="col-lg-6 col-md-12 footer__text">
                            طرح‌نما یا لورم ایپسوم به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.
                            معمولاً طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب‌کار خود نشان دهند که صفحهٔ طراحی یا صفحه‌بندی شده.گیرد، چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.
                            تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <Bottom_Menu/>
                        </div>
                        <div className="footer__info col-lg-4 col-md-12  mt-4 mt-lg-0 ml-xl-4">
                            <div className="contacts d-flex flex-row">
                                <Contact/>
                                <Social/>
                            </div>
                            <Payment/>
                        </div>
                    </div>
                </div>
                <footer className="text-center">
                    <div className="copy-right">
                        تمامی حقوق مادی و معنوی این وبسایت مربوط به آکادمی آموزش آنلاین می باشد
                    </div>
                </footer>
            </div>
        );
    }
}
