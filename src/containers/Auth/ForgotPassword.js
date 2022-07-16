import React, { Component } from "react";
import { connect } from "react-redux";
import "./ForgotPassword.scss";
import { sendForgotPassword } from "../../services/userService"
import { KeyCodeUtils } from "../../utils";
import { FormattedMessage } from "react-intl";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            errMessage: "",
            isShowSuccess: false,
        };
    }
    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    handleBtnSend = async () => {
        this.setState({
            errMessage: ""
        })
        try {
            let data = await sendForgotPassword({
                email: this.state.email
            })
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            }
            if (data && data.errCode === 0) {
                this.setState({
                    isShowSuccess: true
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
        }
    };
    handleKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            this.handleBtnSend()
        }
    }
    render() {
        let { isShowSuccess } = this.state;
        return (
            <>
                {isShowSuccess === false ?
                    <div className="forgot-pw-background">
                        <div className="forgot-pw-container">
                            <div className="forgot-pw-content row">
                                <div className="col-12 text-forgot-pw">
                                    <FormattedMessage id={"auth.forgot-pw"} />
                                </div>
                                <div className="col-12 form-group forgot-pw-input">
                                    <label>
                                        <FormattedMessage id={"auth.email"} />
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập địa chỉ email của bạn"
                                        value={this.state.email}
                                        onChange={(event) => this.handleOnChangeInput(event, "email")}
                                        onKeyDown={(event) => this.handleKeyDown(event)}
                                    />
                                </div>
                                <div className="col-12" style={{ color: 'red' }}>
                                    {this.state.errMessage}
                                </div>
                                <div className="col-12">
                                    <button
                                        className="btn-forgot-pw"
                                        onClick={() => this.handleBtnSend()}
                                    >
                                        <FormattedMessage id={"auth.send"} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="forgot-pw-background">
                        <div className="text-center text-check-email">
                            <FormattedMessage id={"auth.text-check-email"} />
                        </div>
                    </div>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
