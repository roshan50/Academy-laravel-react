import React, { Component } from 'react';

export default class Register extends Component {
    render() {
        return (
            <div className="register col-lg-5  d-flex flex-column align-items-center">
                <h1 className="text-center">ثبت نام در سامانه</h1>
                <div className="d-flex input-div">
                    <div className="mdi mdi-account-outline input-mdi"></div>
                    <input type="text" className="input-style" placeholder="نام و نام خانوادگی"/>
                </div>
                <div className="d-flex input-div">
                    <div className="mdi mdi-cellphone-android input-mdi"></div>
                    <input type="text" className="input-style" placeholder="شماره همراه"/>
                </div>
                <div className="d-flex input-div">
                    <div className="mdi mdi-lock-outline input-mdi"></div>
                    <input type="text" className="input-style" placeholder="رمز عبور"/>
                </div>
                <div className="put-video">
                    <input type="checkbox" className="login-checkbox"/>
                        <label for="" className="login-label">تمایل دارم ویدئوهای آموزشی داخل سایت ثبت نمایم</label>
                </div>
                <button className="bg-primary mdi mdi-account-plus btn-login">ثبت نام در سامانه</button>
            </div>
        );
    }
}
