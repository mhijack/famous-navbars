import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class Slack extends Component {
    state = {
        rgbClassName: ['nav__slack', '.up'],
        whiteClassName: ['nav__slack', 'fixed'],
        mobileOpen: false
    };

    /*  Setup listener for scrolling
    */
    componentDidMount = () => {
        window.addEventListener('scroll', _.throttle(this.handleScroll, 20));
        window.addEventListener('resize', _.throttle(this.handleResize, 50));
    };

    /*  Setup listener for scrolling
    */
    componentWillUnmount = () => {
        window.removeEventListener('scroll', _.throttle(this.handleScroll, 20));
        window.removeEventListener('resize', _.throttle(this.handleResize, 50));
    };

    /*  Reset mobileOpen if window too wide
    */
    handleResize = () => {
        if (window.innerWidth > 770) {
            this.setState({
                mobileOpen: false
            });
            document.querySelector('body').classList.remove('stop-scroll');
        }
    };

    /*  set mobileOpen to true
    */
    setMobile = () => {
        document.querySelector('body').classList.add('stop-scroll');
        this.setState({ mobileOpen: true });
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
                                <a className="slack__link">Documentation</a>
                            </li>
                            <li>
                                <a className="slack__link">App Directory</a>
                            </li>
                            <li>
                                <a className="slack__link slack__btn">
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a
                                    className="slack__link menu menu--white"
                                    onClick={this.setMobile}
                                >
                                    Menu
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
                                <a className="slack__link">Documentation</a>
                            </li>
                            <li>
                                <a className="slack__link">App Directory</a>
                            </li>
                            <li>
                                <a className="slack__link slack__btn">
                                    Get Started
                                </a>
                            </li>
                            <li>
                                <a
                                    className="slack__link menu menu--rgb"
                                    onClick={this.setMobile}
                                >
                                    Menu
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav
                        className={[
                            'slack__mobile',
                            this.state.mobileOpen ? 'mobile-open' : ''
                        ].join(' ')}
                    >
                        <img
                            src={'/static/icons/slack/slack_white.png'}
                            alt="slack white logo"
                            className="slack__icon slack__mobile--logo"
                        />
                        <a
                            className="slack__mobile--close"
                            onClick={() => {
                                this.setState(prevState => ({
                                    mobileOpen: false
                                }));
                                document
                                    .querySelector('body')
                                    .classList.remove('stop-scroll');
                            }}
                        >
                            X
                        </a>
                        <ul className="slack__list slack__list--mobile">
                            <li>
                                <a className="slack__mobile--link">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a className="slack__mobile--link">
                                    App Directory
                                </a>
                            </li>
                            <li>
                                <a className="slack__mobile--link">
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <style jsx>{`
                        nav.nav__slack {
                            height: 70px;
                            min-width: 0;
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

                        .slack__list li:not(:last-child) {
                            display: inline-block;
                        }
                        .menu {
                            display: none;
                            border: 2px solid #fff;
                        }
                        .fixed .menu--white {
                            background: white;
                            color: #48ba87;
                            border: 2px solid #48ba87;
                        }
                        .fixed .slack__link:hover[class$='white'] {
                            background: white;
                        }
                        .up {
                            transform: translate3d(0, -80px, 0);
                        }
                        .down {
                            transform: translate3d(0, 0, 0);
                        }

                        .slack__mobile {
                            min-width: 0;
                            display: none;

                            background: #492d78;
                            position: fixed;
                            top: 0;
                            left: 0;
                            height: 100%;
                            width: 100%;
                            color: #fff;
                            font-size: 2.5rem;
                            font-family: system-ui;

                            opacity: 0;
                            transform: translate3d(0, -150%, 0);

                            transition: opacity 250ms
                                    cubic-bezier(0.165, 0.84, 0.44, 1),
                                transform 1ms cubic-bezier(0.165, 0.84, 0.44, 1);
                        }
                        .slack__mobile--logo {
                            opacity: 0.6;
                            cursor: pointer;

                            flex: 0;
                        }
                        .slack__mobile.mobile-open .slack__mobile--logo {
                            position: relative;
                            top: 3px;
                        }

                        .slack__mobile.mobile-open {
                            display: flex;
                            justify-content: flex-start;
                            align-items: flex-start;
                            flex-wrap: wrap;
                            z-index: 1000;

                            transform: translate3d(0, 0, 0);
                            opacity: 1;
                        }
                        .slack__mobile--close {
                            font-size: 1.8rem;
                            cursor: pointer;

                            position: relative;
                            top: 15px;
                            right: 25px;
                            margin-left: auto;
                            flex: 0;
                        }
                        .slack__list--mobile {
                            display: block;

                            justify-self: flex-start;
                            align-self: flex-start;
                            margin: -50px 0 0 25px;
                            flex: 1 1 770px;
                        }
                        .slack__mobile .slack__list--mobile li {
                            display: block;
                        }

                        @media only screen and (max-width: 1024px) {
                            .nav__slack h1 {
                                display: none;
                            }
                        }
                        @media only screen and (max-width: 770px) {
                            .menu {
                                display: block;
                            }
                            .slack__list li:not(:last-child) {
                                display: none;
                            }
                        }
                    `}</style>
                    <style jsx global>{`
                        .nav__wrapper {
                            box-shadow: none !important;
                            border-bottom: none !important;
                        }
                        body.stop-scroll {
                            overflow: hidden;
                        }
                    `}</style>
                </div>
            </Fragment>
        );
    }
}

export default Slack;
