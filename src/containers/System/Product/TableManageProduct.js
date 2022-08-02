import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageProduct.scss'
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import { toast } from 'react-toastify';
import { handleChangeStatusProduct } from '../../../services/userService';

class TableManageProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productRedux: [],
            errMessage: ""
        }
    }

    async componentDidMount() {
        this.props.fetchProductRedux({
            statusId: "ALL",
            categoryId: "ALL",
            brandId: "ALL",
            valueSearch: "ALL"
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            this.setState({
                productRedux: this.props.listProducts
            })
        }
    }
    handleDeleteProduct = (product) => {
        this.props.deleteAProductRedux(product.id);
    }
    handleEditProduct = (product) => {
        this.props.handleEditProductFromParentKey(product)
    }
    handleChangeStatusProduct = async (product, type) => {
        try {
            await handleChangeStatusProduct({
                id: product.id,
                type: type
            })
            if (type === 'BAN') {
                toast.success(`Ẩn sản phẩm ${product.name} thành công!`)
                this.props.fetchProductRedux({
                    statusId: "ALL",
                    categoryId: "ALL",
                    brandId: "ALL",
                    valueSearch: "ALL"
                })
            }
            if (type === 'PERMIT') {
                toast.success(`Hiện sản phẩm ${product.name} thành công!`)
                this.props.fetchProductRedux({
                    statusId: "ALL",
                    categoryId: "ALL",
                    brandId: "ALL",
                    valueSearch: "ALL"
                })
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            toast.error("Thao tác thất bại! Vui lòng thử lại sau.")
        }
    }
    render() {
        let arrProducts = this.state.productRedux;
        return (
            <>
                <table id='TableManageProduct'>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th><FormattedMessage id={"manage-product.name"} /></th>
                            <th><FormattedMessage id={"manage-product.view"} /></th>
                            <th><FormattedMessage id={"manage-product.stock"} /></th>
                            <th><FormattedMessage id={"manage-product.originalPrice"} /></th>
                            <th><FormattedMessage id={"manage-product.discountPrice"} /></th>
                            <th><FormattedMessage id={"manage-product.percentDiscount"} /></th>
                            <th><FormattedMessage id={"manage-product.status"} /></th>
                            <th><FormattedMessage id={"manage-product.action"} /></th>
                        </tr>
                        {arrProducts && arrProducts.length > 0 &&
                            arrProducts.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.view}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.originalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{item.discountPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{item.percentDiscount + '%'}</td>
                                        <td>{item.statusId === 'S1' ? "Hiện" : "Ẩn"} </td>
                                        <td>
                                            <button
                                                className='btn-edit'
                                                onClick={() => this.handleEditProduct(item)}
                                            ><i className="fas fa-pencil-alt"></i></button>
                                            <button
                                                className='btn-delete'
                                                onClick={() => this.handleDeleteProduct(item)}
                                            ><i className="fas fa-trash"></i></button>
                                            {item.statusId === 'S1' ?
                                                <button
                                                    className='btn-change-status-product'
                                                    onClick={() => this.handleChangeStatusProduct(item, "BAN")}
                                                >
                                                    <i className='far fa-eye-slash' title='Ẩn sản phẩm'></i>
                                                </button>
                                                :
                                                <button
                                                    className='btn-change-status-product'
                                                    onClick={() => this.handleChangeStatusProduct(item, "PERMIT")}
                                                >
                                                    <i className='far fa-eye' title='Hiện sản phẩm'></i>
                                                </button>
                                            }
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                    {arrProducts <= 0 &&
                        <div className='text-center'>
                            <FormattedMessage id={"manage-product.no-data"} />
                        </div>
                    }
                </table>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProductRedux: (data) => dispatch(actions.fetchAllProducts(data)),
        deleteAProductRedux: (id) => dispatch(actions.deleteAProduct(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageProduct);
