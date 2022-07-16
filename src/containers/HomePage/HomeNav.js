import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import "./HomeNav.scss";
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
class HomeNav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    render() {
        const { userInfo, processLogout } = this.props
        return (
            <div className='home-nav-container'>
                <div className='home-nav-content'>
                    <div className='left-content'>
                        <div className='nav-logo'
                            onClick={() => this.returnToHome()}>
                        </div>
                    </div>
                    <div className='center-content'>
                        <NavLink to={"/home"} activeClassName="selected">
                            <div className="title-content">Trang chủ</div>
                        </NavLink>
                        <NavLink to={"/category"} activeClassName="selected" >
                            <div className="title-content">Sản phẩm</div>
                        </NavLink>
                        <NavLink to={"/blog"} activeClassName="selected" >
                            <div className="title-content">Bài viết</div>
                        </NavLink>
                        <NavLink to={"/discount"} activeClassName="selected" >
                            <div className="title-content">Mã giảm giá</div>
                        </NavLink>
                    </div>
                    <div className='next-center-content'>
                        <div className='support'>
                            <i className="fas fa-question-circle"></i>Hỗ trợ
                        </div>
                        <div className='cart'>
                            <ion-icon name="cart-outline" style={{ fontSize: "2rem", color: "#666" }}></ion-icon>
                            <span className="box-quantity-cart">0</span>
                        </div>
                    </div>
                    <div className='right-content'>
                        {userInfo ?
                            <>
                                <NavLink to={"/do something"}>
                                    <div className='nav-img' style={{ backgroundImage: `url(${userInfo.image ? userInfo.image : 'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png'})` }}>
                                    </div>
                                </NavLink >
                                <div className='nav-logout' onClick={processLogout} title="Đăng xuất">
                                    <i className="fas fa-sign-out-alt"></i>
                                </div>
                            </>
                            :
                            <>
                                <NavLink to={"/login"}>
                                    <div className='nav-login' title="Đăng nhập">
                                        <i className="fas fa-user-alt"></i>
                                    </div>
                                </NavLink>
                                <NavLink to={"/sign-up"}>
                                    <div className='nav-sign-up' title="Đăng ký">
                                        <i className="fas fa-user-plus"></i>
                                    </div>
                                </NavLink>
                            </>
                        }
                    </div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeNav));
