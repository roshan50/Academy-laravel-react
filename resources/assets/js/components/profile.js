import React, { Component } from 'react';

export default class Profile extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {title: '', cost: ''};
    // }
    // componentDidMount(){
    //     axios.get('http://localhost:8000/items')
    //         .then(response => {
    //             this.setState({ items: response.data });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    // tabRow(){
    //     if(this.state.items instanceof Array){
    //         return this.state.items.map(function(object, i){
    //             return <TableRow obj={object} key={i} />;
    //         })
    //     }
    // }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="container">
                    <div className="my-info row">
                        <div className="col-lg-4">
                            <div className="personal pannel d-flex">
                                <div className="personal__img">
                                    <img src="images/author.png" alt=""/>
                                </div>
                                <div className="personal__txt">
                                    <div className="name mdi mdi-account-outline">حسین محمدزاده</div>
                                    <div className="email mdi mdi-email">Hossein.mhmd@gmail.com</div>
                                    <div className="logout mdi mdi-power text-secondary">خروج از کاربری</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="statistic  d-flex flex-column justify-content-between">
                                <div className="credit pannel d-flex">
                                    <div className="credit__img">
                                        <img src="images/money.png" alt=""/>
                                    </div>
                                    <div className="credit__txt">
                                        <div>میزان اعتبار</div>
                                        <div className="font-weight-bold text-16 text-dark">125/000 ریال</div>
                                    </div>
                                </div>
                                <div className="achivment pannel d-flex">
                                    <div className="achivment__img">
                                        <img src="images/hill.png" alt=""/>
                                    </div>
                                    <div className="achivment__txt">
                                        <div>دستاورد شما</div>
                                        <div className="font-weight-bold text-16 text-dark">دستاورد شماره 1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <ul className="medals pannel list-unstyled d-flex">
                                <li>
                                    <img src="images/medal-1.png" alt=""/>
                                </li>
                                <li>
                                    <img src="images/medal-1.png" alt=""/>
                                </li>
                                <li>
                                    <img src="images/medal-1.png" alt=""/>
                                </li>
                                <li>
                                    <img src="images/medal-1.png" alt=""/>
                                </li>
                                <li>
                                    <img src="images/jam.png" alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="my-dashboard list-unstyled">
                                <li className="pannel mdi mdi-account-edit flex-row">ویرایش حساب کاربری</li>
                                <li className="pannel mdi mdi-book-open-variant flex-row">دوره های خریداری شده</li>
                                <li className="pannel mdi mdi-heart-outline flex-row">لیست علاقمندی ها</li>
                                <li className="pannel mdi mdi-sale flex-row">بن های تخفیف</li>
                                <li className="pannel mdi mdi-trophy-award flex-row">امتیازات</li>
                                <li className="pannel mdi mdi-cash flex-row">اطلاعات مالی</li>
                                <li className="pannel mdi mdi-comment-question-outline flex-row">پرسش و پاسخ</li>
                                <li className="pannel mdi mdi-clipboard-text flex-row">گزارش فعالیت ها</li>
                            </ul>
                        </div>

                        <div className="col-lg-9">
                            <div className="my-courses pannel">
                                <h6 className="my-course__header mdi mdi-book-open-variant text-secondary">دوره های خریداری شده</h6>
                                <div className="my-course__body">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>کد دوره</th>
                                                <th>نام دوره</th>
                                                <th>تاریخ خرید</th>
                                                <th>مبلغ کل</th>
                                                <th>وضعیت</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>154558</td>
                                            <td>آموزش مقدماتی فتوشاپ</td>
                                            <td>1396/09/06</td>
                                            <td>158/296/500 ریال</td>
                                            <td className="d-flex justify-content-center"><div className="badge badge-warning">انتظار پرداخت</div></td>
                                        </tr>
                                        <tr>
                                            <td>510054105</td>
                                            <td>آموزش C# مقدماتی</td>
                                            <td>1396/09/06</td>
                                            <td>158/296/500 ریال</td>
                                            <td className="d-flex justify-content-center"><div className="badge badge-success">در حال آموزش</div></td>
                                        </tr>
                                        <tr>
                                            <td>45204524</td>
                                            <td>آموزش لاراول</td>
                                            <td>1396/09/06</td>
                                            <td>158/296/500 ریال</td>
                                            <td className="d-flex justify-content-center"><div className="badge badge-dark">تکمیل شده</div></td>
                                        </tr>
                                        <tr>
                                            <td>488760</td>
                                            <td>آموزش PHP</td>
                                            <td>1396/09/06</td>
                                            <td>158/296/500 ریال</td>
                                            <td className="d-flex justify-content-center"><div className="badge badge-dark">تکمیل شده</div></td>
                                        </tr>
                                        <tr>
                                            <td>87980</td>
                                            <td>آموزش JavaScript</td>
                                            <td>1396/09/06</td>
                                            <td>158/296/500 ریال</td>
                                            <td className="d-flex justify-content-center"><div className="badge badge-dark">تکمیل شده</div></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
