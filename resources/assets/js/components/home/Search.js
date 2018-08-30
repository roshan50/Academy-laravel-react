import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container d-none d-lg-block">
                <div className="row search-wrapper justify-content-center">
                    <div className="col-12 search-box">
                        <div className="search">
                            <div className="search__icon  mdi mdi-magnify"></div>
                            <input className="search__input" type="text" placeholder="دوره مورد نظر خود را برای جستجو وارد نمایید..."/>
                                <button className="btn-search">جستجو</button>
                        </div>
                        <div className="tag-box d-flex">
                            <div className="tag__title">دوره های محبوب</div>
                            <ul className="tags d-flex">
                                <li className="badge badge-primary">CSS</li>
                                <li className="badge badge-secondary">Java</li>
                                <li className="badge badge-info">HTML</li>
                                <li className="badge badge-warning">Bootstrap</li>
                                <li className="badge badge-success">Fundation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;