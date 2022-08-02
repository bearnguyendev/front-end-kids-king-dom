import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import ListOrder from './ListOrder';
import { CommonUtils } from '../../../utils';
class ManageOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrStatusOrder: [],
            dataOrder: [],
        }
    }
    componentDidMount() {
        this.props.fetchAllcodeStatusOrder()
        this.props.fetchAllOrders('ALL')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.statusOrder !== this.props.statusOrder) {
            this.setState({
                arrStatusOrder: this.props.statusOrder
            })
        }
        if (prevProps.orderRedux !== this.props.orderRedux) {
            this.setState({
                dataOrder: this.props.orderRedux
            })
        }
    }
    handleOnchangeStatus = (event) => {
        this.props.fetchAllOrders(event.target.value)
    }
    handleExportExcel = async () => {
        await CommonUtils.exportExcel(this.state.dataOrder, "Danh sách đặt hàng", "ListOrder")
    }
    render() {
        let { arrStatusOrder } = this.state
        return (
            <div className='manage-order-container'>
                <div className="title" >
                    <FormattedMessage id={"manage-order.title"} />
                </div>
                <div className='manage-order-body'>
                    <div className='container'>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1" />
                                <FormattedMessage id={"manage-order.list-order"} />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <select onChange={(event) => this.handleOnchangeStatus(event)} className="form-control col-3 ml-3 mt-3 form-control-lg">
                                    <option value={'ALL'} selected>Tất cả trạng thái đơn hàng</option>
                                    {
                                        arrStatusOrder && arrStatusOrder.length > 0 &&
                                        arrStatusOrder.map((item, index) => {
                                            return (
                                                <option value={item.keyMap}>{item.value}</option>
                                            )
                                        })
                                    }
                                </select>
                                {/* <div className='col-3' >
                                    <button className='btn btn-success btn-lg'
                                        style={{ float: "right", width: "11rem", height: "3rem" }}
                                        onClick={() => this.handleExportExcel()}
                                    >
                                        Xuất
                                        &nbsp;
                                        <i style={{ fontSize: "18px" }} className="fas fa-file-excel"></i>
                                    </button>
                                </div> */}
                            </div>
                            <ListOrder
                                arrOrder={this.state.dataOrder}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        orderRedux: state.admin.orders,
        statusOrder: state.admin.statusOrder,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllcodeStatusOrder: () => dispatch(actions.fetchAllcodeStatusOrder()),
        fetchAllOrders: (statusId) => dispatch(actions.fetchAllOrders(statusId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrder);
