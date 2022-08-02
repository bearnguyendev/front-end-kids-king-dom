import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import moment from 'moment';
import { Link } from 'react-router-dom';
class ManageOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        let { arrOrder } = this.props
        return (
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover" style={{ border: '1' }} width="100%" cellspacing="0">
                        <thead>
                            <tr className='table-primary'>
                                <th><FormattedMessage id={"manage-order.id-order"} /></th>
                                <th><FormattedMessage id={"manage-order.date"} /></th>
                                <th><FormattedMessage id={"manage-order.type-ship"} /></th>
                                <th><FormattedMessage id={"manage-order.voucher"} /></th>
                                <th><FormattedMessage id={"manage-order.sum-bill"} /></th>
                                <th><FormattedMessage id={"manage-order.status"} /></th>
                                <th><FormattedMessage id={"manage-order.action"} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrOrder && arrOrder.length > 0 &&
                                arrOrder.map((item, index) => {
                                    let date = moment.unix(item.orderDate / 1000).format('DD/MM/YYYY')
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{date}</td>
                                            <td>{item.typeShipData.type && item.typeShipData.type}</td>
                                            <td>{item.voucherData.codeVoucher ? item.voucherData.codeVoucher : "Không sử dụng mã giảm giá"}</td>
                                            <td>{item.totalPayment > 0 ? (item.totalPayment + item.typeShipData.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) : item.typeShipData.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                            <td>{item.statusOrderData.value}</td>
                                            <td>
                                                <Link to={`/admin/order-detail/${item.id}`}><FormattedMessage id={"manage-order.view"} /></Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {arrOrder <= 0 &&
                        <div className='text-center'>
                            <FormattedMessage id={"manage-order.no-data"} />
                        </div>
                    }
                </div>

            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrder);
