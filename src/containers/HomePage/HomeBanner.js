import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./HomeBanner.scss"
import Slider from "react-slick";
class HomeBanner extends Component {

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
        var settings = {
            dots: true,
            autoplay: true,
            arrows: false
        };
        return (
            <div className="home-banner-container">
                <div className='home-banner-content'>
                    <Slider {...settings}>
                        <div className='home-banner-bg-img'>
                        </div>
                        <div className='home-banner-bg-img'>
                        </div>
                        <div className='home-banner-bg-img'>
                        </div>
                        <div className='home-banner-bg-img'>
                        </div>
                    </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);
