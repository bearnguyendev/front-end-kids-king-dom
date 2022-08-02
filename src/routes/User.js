import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import HomeFooter from '../containers/HomePage/HomeFooter';
import HomeNav from '../containers/HomePage/HomeNav';
import AddressUser from '../containers/User/AddressUser';
import CategoryUser from '../containers/User/CategoryUser';
import DetailUserPage from '../containers/User/DetailUserPage';
import OrderUser from '../containers/User/OrderUser';
import UserPage from '../containers/User/UserPage';
import VoucherUser from '../containers/User/VoucherUser';
import { path } from '../utils';
import AvatarUser from '../containers/User/AvatarUser';
import "../containers/User/DetailUserPage.scss"
import ChangePasswordUser from '../containers/User/ChangePasswordUser';

class User extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        let { userInfo } = this.props;
        return (
            <>
                <div className="user-container">
                    <HomeNav />
                    <div className="user-body container my-4" style={{ minHeight: "calc(90vh - 100px)" }}>
                        <CategoryUser userInfo={userInfo} />
                        <div className='content-center'>
                            <Switch>
                                <Route path={path.USER} exact component={UserPage} />
                                <Route exact path={path.DETAIL_USER} ><DetailUserPage userInfo={userInfo} /></Route>
                                <Route exact path={path.VOUCHER_USER} ><VoucherUser userId={userInfo.id} /></Route>
                                <Route exact path={path.ADDRESS_USER} ><AddressUser userId={userInfo.id} /></Route>
                                <Route exact path={path.ORDER_USER} ><OrderUser userId={userInfo.id} /></Route>
                                <Route exact path={path.CHANGE_PASSWORD_USER} component={ChangePasswordUser} />
                                <Route component={() => { return (<Redirect to={path.HOMEPAGE} />) }} />
                            </Switch>
                        </div>
                        <AvatarUser userInfo={userInfo} />
                    </div>
                    <HomeFooter />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn,
        isAdmin: state.user.isAdmin,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
