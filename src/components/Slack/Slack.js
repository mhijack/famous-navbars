import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class Slack extends Component {
    state = {
        rgbClassName: ['nav__slack', '.up'],
        whiteClassName: ['nav__slack', 'fixed']
    };

    /*  Setup listener for scrolling
    */
    componentDidMount = () => {
        window.addEventListener('scroll', _.throttle(this.handleScroll, 20));
    };

    /*  Setup listener for scrolling
    */
    componentWillUnmount = () => {
        window.removeEventListener('scroll', _.throttle(this.handleScroll, 20));
    };

    /*  Toggle classes to each nav bar depending on scroll position
    */
    handleScroll = () => {
        const scrollPosition = window.scrollY;
        let rgbClassName = ['nav__slack'];
        let whiteClassName = ['nav__slack', 'fixed'];

        if (scrollPosition > 30) {
            /*  add 'down' to white, 'up' to rgb
            */
            whiteClassName = whiteClassName.concat('down');
            rgbClassName = rgbClassName.concat('up');
        } else {
            /*  add 'up' to white, 'down' to rgb
            */
            whiteClassName = whiteClassName.concat('up');
            rgbClassName = rgbClassName.concat('down');
        }
        this.setState({
            whiteClassName,
            rgbClassName
        });
    };

    render() {
        return (
            <Fragment>
                <div className="nav__wrapper">
                    <nav
                        className={this.state.whiteClassName.join(' ')}
                        ref={node => (this.whiteNav = node)}
                    >
                        <img
                            src={'/static/icons/slack/slack_rgb.png'}
                            alt="slack white logo"
                            className="slack__icon slack__icon--white"
                        />
                        <h1>Developers</h1>
                        <ul className="slack__list">
                            <li>
                                <a href="#" className="slack__link">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="slack__link">
                                    App Directory
                                </a>
                            </li>
                            <li>
                                <a href="#" className="slack__link slack__btn">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav
                        className={this.state.rgbClassName.join(' ')}
                        ref={node => (this.rgbNav = node)}
                    >
                        <img
                            src={'/static/icons/slack/slack_white.png'}
                            alt="slack rgb logo"
                            className="slack__icon slack__icon--rgb"
                        />
                        <h1>Developers</h1>
                        <ul className="slack__list">
                            <li>
                                <a href="#" className="slack__link">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="slack__link">
                                    App Directory
                                </a>
                            </li>
                            <li>
                                <a href="#" className="slack__link slack__btn">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <style jsx>{`
                        nav {
                            height: 70px !important;
                        }
                        .nav__wrapper {
                            height: 70px;
                        }
                        .nav__slack {
                            width: 100%;
                            background-color: rgba(27, 30, 65, 0.9);
                            color: #fff;
                            font-family: system-ui;
                            position: fixed;

                            transition: transform 420ms
                                cubic-bezier(0.165, 0.84, 0.44, 1);
                            animation-fill-mode: forwards;

                            display: flex;
                            align-items: center;
                        }
                        .slack__icon {
                            height: 65px;
                            width: 135px;
                            margin-left: 3px;
                        }
                        .slack__icon--white {
                        }
                        .slack__icon--rgb {
                        }
                        .nav__slack h1 {
                            margin-left: 5px;
                            padding: 0 20px;
                            border-left: 2px solid #fff;
                            font-size: 1rem;
                            line-height: 1.86rem;
                        }
                        .slack__list {
                            list-style-type: none;
                            line-height: 70px;

                            margin-right: 20px;
                            margin-left: auto;
                            display: flex;
                        }
                        .slack__list li a {
                        }
                        .slack__link {
                            font-family: system-ui;
                            font-weight: 600;
                            color: #fff;
                            text-decoration: none;
                            color: #fff;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 15px;
                            font-weight: 700;
                            margin-left: 9px;
                            position: relative;
                            cursor: pointer;
                            line-height: 1em;
                            padding: 8px 7px 9px;
                            border-radius: 5px;
                            opacity: 0.8;
                        }
                        .slack__link:hover {
                            opacity: 1;
                            background: rgba(0, 0, 0, 0.1);
                        }
                        .slack__btn {
                            border: 2px solid #fff;
                        }
                        .fixed {
                            background-color: #fff;
                            color: #717274;
                            z-index: 300;
                            margin-bottom: 20px;
                            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

                            position: fixed;
                            top: 0;
                            transform: translate3d(0, -80px, 0);
                        }
                        .fixed h1 {
                            border-left: 2px solid #717274;
                        }
                        .fixed .slack__link {
                            color: #717274;
                        }
                        .fixed .slack__btn {
                            border: 2px solid #717274;
                        }
                        .fixed .slack__link:hover[class$='btn'] {
                            background: white;
                        }

                        .up {
                            transform: translate3d(0, -80px, 0);
                        }
                        .down {
                            transform: translate3d(0, 0, 0);
                        }
                    `}</style>
                    <style jsx global>{`
                        .nav__wrapper {
                            box-shadow: none !important;
                            border-bottom: none !important;
                        }
                    `}</style>
                </div>
            </Fragment>
        );
    }
}

export default Slack;
