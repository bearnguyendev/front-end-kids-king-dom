import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import "./HomePage.scss";
import HomeHeader from './HomeHeader';
import HomeNav from './HomeNav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeFooter from './HomeFooter';
import TopCategory from './Section/TopCategory';
import NewProduct from './Section/NewProduct';
import Blogs from './Section/Blogs';
import About from './Section/About';
class HomePage extends Component {

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
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div>
                <HomeHeader />
                <TopCategory settings={settings} />
                <NewProduct settings={settings} />
                {/* <Blogs /> */}
                <About />
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
