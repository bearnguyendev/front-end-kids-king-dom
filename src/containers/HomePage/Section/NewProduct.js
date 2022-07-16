import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
//import * as actions from "../../../store/actions"
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils';
import { withRouter } from 'react-router';
class MedicalFacility extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataNewProduct: []
        }
    }
    componentDidMount() {
        //this.props.fetchTopNewProduct()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allNewProduct !== this.props.allNewProduct) {
            this.setState({
                dataNewProduct: this.props.allNewProduct
            })
        }
    }
    handleViewDetailClinic = (newproduct) => {
        this.props.history.push(`/detail-new-product/${newproduct.id}`)
    }
    render() {
        let { language } = this.props;
        let { dataNewProduct } = this.state;
        return (
            <div className='section-share section-new-product'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id={"home-page.outstanding-new-product"} />
                        </span>
                        <button className='btn-section'>
                            <FormattedMessage id={"home-page.more-infor"} />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {/* {dataNewProduct && dataNewProduct.length > 0 &&
                                dataNewProduct.map((item, index) => {
                                    return (
                                        <div className='section-customize' key={index}
                                            onClick={() => this.handleViewDetailClinic(item)}
                                        >
                                            <div className='customize-border'>
                                                <div className='bg-image section-new-product'
                                                    style={{ backgroundImage: `url(${item.image})` }}
                                                ></div>
                                                <div className='new-product text-center'>
                                                    <div>
                                                        {language === LANGUAGES.VI ? item.nameVi : item.nameEn}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })} */}
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='bg-image section-new-product'>

                                    </div>
                                    <div className='new-product text-center'>
                                        <div>
                                            name 1
                                        </div>
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
                            <div className='section-customize'

                            >
                                <div className='customize-border'>
                                    <div className='bg-image section-new-product'

                                    ></div>
                                    <div className='new-product text-center'>
                                        <div>
                                            name 2
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'

                            >
                                <div className='customize-border'>
                                    <div className='bg-image section-new-product'

                                    ></div>
                                    <div className='new-product text-center'>
                                        <div>
                                            name 3
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'

                            >
                                <div className='customize-border'>
                                    <div className='bg-image section-new-product'

                                    ></div>
                                    <div className='new-product text-center'>
                                        <div>
                                            name 4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'

                            >
                                <div className='customize-border'>
                                    <div className='bg-image section-new-product'

                                    ></div>
                                    <div className='new-product text-center'>
                                        <div>
                                            name 5
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        allNewProduct: state.admin.allNewProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //fetchTopNewProduct: () => dispatch(actions.fetchTopNewProduct())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MedicalFacility));
