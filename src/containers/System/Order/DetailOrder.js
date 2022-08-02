import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import moment from 'moment';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateStatusOrderService } from '../../../services/userService';
import "./DetailOrder.scss"
class DetailOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataOrder: [],
            sumCart: 0
        }
    }
    componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let orderId = this.props.match.params.id
            this.props.fetchDetailOrderById(orderId)
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataOrderRedux !== this.props.dataOrderRedux) {
            this.setState({
                dataOrder: this.props.dataOrderRedux
            })
        }
    }
    handleAcceptOrder = async () => {
        let res = await updateStatusOrderService({
            id: this.state.dataOrder.id,
            statusId: 'S4'
        })
        if (res && res.errCode === 0) {
            toast.success("Xác nhận đơn hàng thành công")
            if (this.props.match && this.props.match.params && this.props.match.params.id) {
                let orderId = this.props.match.params.id
                this.props.fetchDetailOrderById(orderId)
            }
        }
    }
    handleWaitProduct = async () => {
        let res = await updateStatusOrderService({
            id: this.state.dataOrder.id,
            statusId: 'S5'
        })
        if (res && res.errCode === 0) {
            toast.success("Xác nhận lấy hàng thành công")
            if (this.props.match && this.props.match.params && this.props.match.params.id) {
                let orderId = this.props.match.params.id
                this.props.fetchDetailOrderById(orderId)
            }
        }
    }
    handleSendProduct = async () => {
        let res = await updateStatusOrderService({
            id: this.state.dataOrder.id,
            statusId: 'S6'
        })
        if (res && res.errCode === 0) {
            toast.success("Xác nhận đang giao hàng")
            if (this.props.match && this.props.match.params && this.props.match.params.id) {
                let orderId = this.props.match.params.id
                this.props.fetchDetailOrderById(orderId)
            }
        }
    }
    handleSuccessShip = async () => {
        let res = await updateStatusOrderService({
            id: this.state.dataOrder.id,
            statusId: 'S7'
        })
        if (res && res.errCode === 0) {
            toast.success("Đã giao hàng thành công")
            if (this.props.match && this.props.match.params && this.props.match.params.id) {
                let orderId = this.props.match.params.id
                this.props.fetchDetailOrderById(orderId)
            }
        }
    }
    handleCancelOrder = async (data) => {
        try {
            let res = await updateStatusOrderService({
                id: this.state.dataOrder.id,
                statusId: 'S8',
                dataOrderUser: data
            })
            if (res && res.errCode === 0) {
                toast.success("Hủy đơn hàng thành công")
                if (this.props.match && this.props.match.params && this.props.match.params.id) {
                    let orderId = this.props.match.params.id
                    this.props.fetchDetailOrderById(orderId)
                    setTimeout(() => {
                        if (this.props.history) {
                            this.props.history.push(`/admin/manage-order`)
                        }
                    }, 3000);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }
    render() {
        let { dataOrder, sumCart } = this.state
        return (
            <>
                <div className="wrap-order">
                    <div className="wrap-heading-order">
                        <span className='nav-logo'
                            onClick={() => this.returnToHome()}>
                        </span>
                        <span className='detail-title'><FormattedMessage id={"manage-order.detail"} /></span>
                    </div>
                    <div className="wrap-address-order">
                        <div className="border-top-address-order"></div>
                        <div className="wrap-content-address">
                            <div className="content-up">
                                <div className="content-left">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span><FormattedMessage id={"manage-order.address-receiver"} /></span>
                                </div>
                            </div>
                            <div className="content-down">
                                {dataOrder && dataOrder.receiverOrderData &&
                                    <>
                                        <div className="content-left">
                                            <span>{dataOrder.receiverOrderData.name} ({dataOrder.receiverOrderData.phoneNumber})</span>
                                        </div>
                                        <div className="content-center">
                                            <span>
                                                {dataOrder.receiverOrderData.address}
                                            </span>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="wrap-order-item">
                        <section className="cart_area">
                            <div className="container">
                                <div className="cart_inner">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col"><FormattedMessage id={"manage-order.detail-product"} /></th>
                                                    <th scope="col"><FormattedMessage id={"manage-order.price-product"} /></th>
                                                    <th scope="col"><FormattedMessage id={"manage-order.quantity-product"} /></th>
                                                    <th scope="col"><FormattedMessage id={"manage-order.sum-price-product"} /></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dataOrder.OrderDetailData && dataOrder.OrderDetailData.length > 0 &&
                                                    dataOrder.OrderDetailData.map((item, index) => {
                                                        sumCart += item.OrderDetail.quantity * item.discountPrice;
                                                        console.log("check sum cart: ", sumCart);
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className='cart-detail-product'>
                                                                        <div className='cart-image-product'
                                                                            style={{ backgroundImage: `url(${item.productImageData[0].image})` }}
                                                                        >
                                                                        </div>
                                                                        <div className='cart-name-product'>
                                                                            {item.name}
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>{item.discountPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                                <td>{item.OrderDetail.quantity}</td>
                                                                <td>{(item.OrderDetail.quantity * item.discountPrice).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                                            </tr>
                                                        )
                                                    })

                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="line-mid">
                                </div>
                                <div className="box-shopcart-bottom">
                                    <div className="content-left">
                                        <div className="wrap-voucher">
                                            <div className='logo-my-voucher'></div>
                                            <span className="choose-voucher">{dataOrder && dataOrder.voucherData ? dataOrder.voucherData.codeVoucher : "Người đặt không sử dụng mã giảm giá"}</span>
                                        </div>
                                        <div className="wrap-note">
                                            <span><FormattedMessage id={"manage-order.note"} /></span>
                                            {dataOrder.note ? dataOrder.note : <FormattedMessage id={"manage-order.no-note"} />}
                                        </div>
                                    </div>
                                    <div className="content-right">
                                        <div className="wrap-price">
                                            <span className="text-total"><FormattedMessage id={"order.sum-cart"} /> ({dataOrder && dataOrder.OrderDetailData && dataOrder.OrderDetailData.length} <FormattedMessage id={"order.product"} />): </span>
                                            <span className="text-price">{sumCart.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="wrap-payment">
                        <div className="content-top">
                            <span><FormattedMessage id={"order.type-ship"} /></span>
                            {dataOrder && dataOrder.typeShipData &&
                                <div className='box-type-payment active'>{dataOrder.typeShipData.type} - {dataOrder.typeShipData.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                            }
                        </div>
                        <div className="content-top">
                            <span><FormattedMessage id={"order.type-payment"} /></span>
                            <div className='box-type-payment active'>{'Thanh toán tiền mặt'}</div>

                        </div>
                        <div className="content-top">
                            <span><FormattedMessage id={"order.status"} /></span>
                            <div className='box-type-payment active'>{dataOrder.statusOrderData && dataOrder.statusOrderData.value}</div>

                        </div>
                        <div className="content-bottom">
                            {dataOrder && dataOrder.receiverOrderData &&
                                <div className="wrap-bottom">
                                    <div className="box-flex">
                                        <div className="head"><FormattedMessage id={"order.name"} /></div>
                                        <div >{dataOrder.receiverOrderData.userData.lastName}{' '}{dataOrder.receiverOrderData.userData.firstName}</div>
                                    </div>
                                    <div className="box-flex">
                                        <div className="head"><FormattedMessage id={"order.email"} /></div>
                                        <div >{dataOrder.receiverOrderData.userData.email}</div>
                                    </div>
                                    <div className="box-flex">
                                        <div className="head"><FormattedMessage id={"order.phone-number"} /></div>
                                        <div >{dataOrder.receiverOrderData.userData.phoneNumber}</div>
                                    </div>
                                </div>
                            }

                            <div className="wrap-bottom">
                                <div className="box-flex">
                                    <div className="head"><FormattedMessage id={"order.sum-cart"} />:</div>
                                    <div >{sumCart.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                                </div>
                                <div className="box-flex">
                                    <div className="head"><FormattedMessage id={"order.sum-voucher"} /></div>
                                    <div >{dataOrder && dataOrder.voucherData ? (sumCart - dataOrder.totalPayment).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) : 0 + ' VND'}</div>
                                </div>
                                <div className="box-flex">
                                    <div className="head"><FormattedMessage id={"order.price-ship"} /></div>
                                    <div >{dataOrder && dataOrder.typeShipData && dataOrder.typeShipData.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                                </div>

                                <div className="box-flex">
                                    <div className="head"><FormattedMessage id={"order.sum-bill"} /></div>
                                    <div className="money">{dataOrder && dataOrder.typeShipData && dataOrder.totalPayment > 0 ? (dataOrder.typeShipData.price + dataOrder.totalPayment).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) : dataOrder && dataOrder.typeShipData && dataOrder.typeShipData.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
                                </div>
                                <div className="box-flex box-btn-action">
                                    {dataOrder && dataOrder.statusId === 'S3' &&
                                        <a onClick={() => this.handleAcceptOrder()} className="main_btn"><FormattedMessage id={"order.accept"} /></a>
                                    }
                                    {dataOrder && dataOrder.statusId === 'S4' &&
                                        <a onClick={() => this.handleWaitProduct()} className="main_btn"><FormattedMessage id={"order.get-product"} /></a>
                                    }
                                    {dataOrder && dataOrder.statusId === 'S5' &&
                                        <a onClick={() => this.handleSendProduct()} className="main_btn"><FormattedMessage id={"order.delivery"} /></a>
                                    }
                                    {dataOrder && dataOrder.statusId === 'S6' &&
                                        <a onClick={() => this.handleSuccessShip()} className="main_btn"><FormattedMessage id={"order.received"} /></a>
                                    }
                                    {dataOrder && dataOrder.statusId === 'S3'
                                        &&
                                        <a onClick={() => this.handleCancelOrder(dataOrder)} className="main_btn btn-cancel"><FormattedMessage id={"order.cancel-order"} /></a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: '100%', height: '100px', backgroundColor: '#f5f5f5' }}></div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        dataOrderRedux: state.admin.orderById
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDetailOrderById: (id) => dispatch(actions.fetchDetailOrderById(id))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailOrder));
