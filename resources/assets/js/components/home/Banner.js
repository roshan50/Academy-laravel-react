import React, {Component} from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="container-fluid bg-primary">
                <div className="container">
                    <div className="banner d-flex justify-content-center">
                        <div className="d-flex row flex-column flex-lg-row justify-content-center">
                            <div className="banner__image d-none d-lg-block">
                                <img className="" src="images/banner.jpg" alt=""/>
                            </div>
                            <div className="banner__context d-flex flex-row">
                                <div className="banner__sign">
                                    <img src="images/cama.png" alt=""/>
                                </div>
                                <div className="banner__text">
                                    <div>افتخار ما</div>
                                    <div>اصالت و کیفیت کم نظیری است که</div>
                                    <div>برای شما به ارمغان آورده ایم...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;