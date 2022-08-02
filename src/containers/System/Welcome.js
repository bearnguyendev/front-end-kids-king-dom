import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import moment from 'moment';
import Chart from './Chart';
import { LIMIT5 } from '../../utils';
class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrTopViewProduct: [],
            userRedux: [],
            genderArr: [],
            male: [],
            feMale: [],
            productRedux: [],
            // chartData: {}
        }
    }
    // componentWillMount() {
    //     // this.getchartData(); // this should be this.getChartData();
    //this.getChartData();

    // }
    // getChartData() {
    //     // Ajax calls here
    //     this.setState({
    //         chartData: {

    //         }
    //     });
    // }
    componentDidMount() {
        let limit = LIMIT5
        let typeSort = 'view'
        this.props.loadTopProducts(limit, typeSort);
        this.props.fetchUserRedux()
        this.props.fetchProductRedux({
            statusId: "ALL",
            categoryId: "ALL",
            brandId: "ALL",
            valueSearch: "ALL"
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topProductRedux !== this.props.topProductRedux) {
            this.setState({
                arrTopViewProduct: this.props.topProductRedux
            })
        }

        if (prevProps.listUsers !== this.props.listUsers) {
            this.buildDataUser(this.props.listUsers)
            this.setState({
                userRedux: this.props.listUsers
            })
        }
        if (prevProps.listProducts !== this.props.listProducts) {
            this.setState({
                productRedux: this.props.listProducts
            })
        }
    }
    buildDataUser = (users) => {
        if (users && users.length > 0) {
            let male = users.filter(item => item.genderId === "M");
            let feMale = users.filter(item => item.genderId === "F");
            this.setState({
                male,
                feMale
            })
        }
    }
    compareDates = (d1, d2) => {
        var parts = d1.split('/');
        var d1 = Number(parts[1]); //yyyymmdd
        parts = d2.split('/');
        var d2 = Number(parts[1]);
        console.log(" check date 1: ", d1, "check date 2:", d2);
        console.log("check d1 vs d2: ", d1 <= d2);
        return d1 <= d2 ? true : false
    }
    render() {
        let nowDate = moment.unix(Date.now() / 1000).format('DD/MM/YYYY')
        let { arrTopViewProduct, male, feMale, productRedux } = this.state
        return (
            <>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Thống kê</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Thông kê một vài thông số</li>
                    </ol>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-light text-dark mb-4 ">
                                <div className="card-body font-weight-bold d-flex align-items-center justify-content-between">
                                    <div>Tổng số sản phẩm</div>
                                    <div>{productRedux && productRedux.length > 0 && productRedux.length}</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-light text-dark mb-4">
                                <div className="card-body font-weight-bold text-center">5 sản phẩm có nhiều lượt xem nhất</div>
                                <div className="card-footer d-flex flex-column">
                                    {arrTopViewProduct && arrTopViewProduct.length > 0
                                        && arrTopViewProduct.map((item) => {
                                            return (
                                                <div className=" text-dark stretched-link">{item.name} - {item.view}</div>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-light text-dark mb-4">
                                <div className="card-body font-weight-bold text-center">Người dùng là nam</div>
                                <div className="card-footer d-flex flex-column">
                                    {male && male.length > 0
                                        && male.map((item) => {
                                            return (
                                                <div className="text-dark ">{item.lastName} {item.firstName}</div>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-light text-dark mb-4">
                                <div className="card-body font-weight-bold text-center">Người dùng là nữ</div>
                                <div className="card-footer d-flex flex-column">
                                    {feMale && feMale.length > 0
                                        && feMale.map((item) => {
                                            return (
                                                <div className="text-dark ">{item.lastName} {item.firstName}</div>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        topProductRedux: state.admin.topProducts,
        listUsers: state.admin.users,
        genderRedux: state.admin.genders,
        listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopProducts: (limit, typeSort) => dispatch(actions.fetchTopProducts(limit, typeSort)),
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        fetchProductRedux: (data) => dispatch(actions.fetchAllProducts(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
