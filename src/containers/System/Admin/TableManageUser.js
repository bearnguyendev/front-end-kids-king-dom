import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions';
import { handleChangeStatusUser } from '../../../services/userService';
import MarkdownIt from 'markdown-it';

import moment from 'moment';
import { toast } from 'react-toastify';
// import style manually

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}



class TableManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRedux: [],
        }
    }

    async componentDidMount() {
        this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }
    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }
    handleChangeStatusUser = async (user, type) => {
        try {
            await handleChangeStatusUser({
                id: user.id,
                type: type
            })
            if (type === 'BAN') {
                toast.success(`Vô hiệu hoá tài khoản ${user.email} thành công!`)
                this.props.fetchUserRedux()
            }
            if (type === 'PERMIT') {
                toast.success(`Mở khoá tài khoản ${user.email} thành công!`)
                this.props.fetchUserRedux()
            }
        } catch (error) {
            console.log(error);
            toast.error("Thao tác thất bại! Vui lòng thử lại sau.")
        }
    }
    render() {
        let arrUsers = this.state.userRedux
        console.log("check state isPermit: ", this.state.isPermitStatus);
        console.log("check props: ", this.props);
        return (
            <>
                <table id='TableManageUser'>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Email</th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Địa chỉ</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                        {arrUsers && arrUsers.length > 0 &&
                            arrUsers.map((item, index) => {
                                let date = moment.unix(item.birthday / 1000).format('DD/MM/YYYY')
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.email}</td>
                                        <td>{`${item.lastName} ${item.firstName}`}</td>
                                        <td>{date}</td>
                                        <td>{item.address}</td>
                                        <td>{item.statusId === 'S1' ? "Đang hoạt động" : "Vô hiệu hoá"} </td>
                                        <td>
                                            <div className='btn-table-manage-user'>
                                                <button
                                                    className='btn-edit'
                                                    onClick={() => this.handleEditUser(item)}
                                                ><i className="fas fa-pencil-alt"></i></button>
                                                <button
                                                    className='btn-delete'
                                                    onClick={() => this.handleDeleteUser(item)}
                                                ><i className="fas fa-trash"></i></button>
                                                {item.statusId === 'S1' ?
                                                    <button
                                                        className='btn-change-status'
                                                        onClick={() => this.handleChangeStatusUser(item, "BAN")}
                                                    >
                                                        <i className='fas fa-user-times' title='Vô hiệu hoá tài khoản'></i>
                                                    </button>
                                                    :
                                                    <button
                                                        className='btn-change-status'
                                                        onClick={() => this.handleChangeStatusUser(item, "PERMIT")}
                                                    >
                                                        <i className='fas fa-user-check' title='Mở khoá tài khoản'></i>
                                                    </button>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
