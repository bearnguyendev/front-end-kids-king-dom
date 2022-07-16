import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Slider from "react-slick";
//import * as actions from "../../../store/actions"
import { LANGUAGES } from '../../../utils';
import { withRouter } from 'react-router';
class TopCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrCategory: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topCategoryRedux !== this.props.topCategoryRedux) {
            this.setState({
                arrCategory: this.props.topCategoryRedux
            })
        }
    }
    componentDidMount() {
        //this.props.loadTopCategorys();
    }
    handleViewDetailDoctor = (category) => {
        this.props.history.push(`/category/${category.id}`)
    }
    render() {
        let allCategorys = this.state.arrCategory;
        let { language } = this.props
        //allCategorys = allCategorys.concat(allCategorys)
        return (
            <div className='section-share section-category'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id={"home-page.outstanding-doctor"} />
                        </span>
                        <button className='btn-section'><FormattedMessage id={"home-page.more-infor"} /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {/* {allCategorys && allCategorys.length > 0 &&
                                allCategorys.map((item, index) => {
                                    let spnameVi = item.Doctor_Infor && item.Doctor_Infor.specialtyData && item.Doctor_Infor.specialtyData.nameVi ? item.Doctor_Infor.specialtyData.nameVi : <FormattedMessage id={"home-page.non-specialty"} />
                                    let spnameEn = item.Doctor_Infor && item.Doctor_Infor.specialtyData && item.Doctor_Infor.specialtyData.nameVi ? item.Doctor_Infor.specialtyData.nameEn : <FormattedMessage id={"home-page.non-specialty"} />
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer.from(item.image, 'base64').toString('binary');
                                    }
                                    let nameVi = `${item.categoryData.valueVi}, ${item.lastName} ${item.firstName} `
                                    let nameEn = `${item.categoryData.valueEn}, ${item.firstName} ${item.lastName}`
                                    return (
                                        <div className='section-customize' key={index}
                                            onClick={() => this.handleViewDetailDoctor(item)}
                                        >
                                            <div className='customize-border'>
                                                <div className='outer-bg'>
                                                    <div className='bg-image section-category'
                                                        style={{ backgroundImage: `url(${imageBase64})` }}

                                                    ></div>
                                                </div>
                                                <div className='category text-center'>
                                                    <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                    <div>{language === LANGUAGES.VI ? spnameVi : spnameEn}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })} */}

                            <div className='section-customize' >
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-category'></div>
                                    </div>
                                    <div className='category text-center'>
                                        <div>category1</div>
                                    </div>
                                    <div className='box-view-cart'>
                                        <span title='Xem chi tiết'>
                                            {/* <ion-icon name="eye-outline" title={false}></ion-icon> */}
                                            <i class="fas fa-eye"></i>
                                        </span>
                                        &emsp;
                                        <span title='Thêm vào giỏ hàng'>
                                            {/* <ion-icon name="cart-outline" title={false}></ion-icon> */}
                                            <i class="fas fa-shopping-cart"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize' >
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-category'></div>
                                    </div>
                                    <div className='category text-center'>
                                        <div>category2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize' >
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-category'></div>
                                    </div>
                                    <div className='category text-center'>
                                        <div>category3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize' >
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-category'></div>
                                    </div>
                                    <div className='category text-center'>
                                        <div>category4</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize' >
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-category'></div>
                                    </div>
                                    <div className='category text-center'>
                                        <div>category5</div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>

            </div >

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topCategoryRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //loadTopCategorys: () => dispatch(actions.fetchTopCategorys())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopCategory));
