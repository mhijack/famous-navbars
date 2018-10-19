import React, { Component } from 'react';

import SVG from 'react-inlinesvg';

class Medium extends Component {
    state = {
        width: 0
    };

    componentDidMount = () => {
        this.updateDimension();
        window.addEventListener('resize', this.updateDimension);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateDimension);
    };

    updateDimension = () => {
        this.setState({
            width: window.innerWidth
        });
    };

    render() {
        return (
            <div className="nav__wrapper">
                <nav className="nav__medium">
                    {this.state.width > 768 ? (
                        <div className="medium__write">
                            <a className="medium__write--link" href="#">
                                Write a story
                            </a>
                        </div>
                    ) : null}

                    <div className="medium__logo--container">
                        <SVG
                            className="medium__logo"
                            src={'/static/icons/medium.svg'}
                        />
                    </div>

                    <div className="medium__buttonset">
                        <SVG
                            className="medium__buttonset--search"
                            src={'/static/icons/search.svg'}
                        />
                        <SVG
                            className="medium__buttonset--bookmark"
                            src={'/static/icons/bookmarks.svg'}
                        />
                        <SVG
                            className="medium__buttonset--notification"
                            src={'/static/icons/notification.svg'}
                        />
                        <img
                            className="isvg avatar"
                            src={'/static/icons/avatar.jpg'}
                            alt="user avatar"
                        />
                    </div>
                </nav>
                <style jsx>{`
                    .nav__medium {
                        width: auto;
                        max-width: 1030px;
                        min-width: 300px;
                        display: flex;
                        align-items: center;
                    }
                    .medium__write {
                    }
                    .medium__write--link {
                        font-family: system-ui;
                        color: #029e74;
                        text-decoration: none;
                    }
                    .medium__write:hover .medium__write--link {
                        color: #018f69;
                    }
                    .medium__buttonset {
                        display: flex;
                        align-items: center;
                    }
                    .avatar {
                        height: 32px;
                        width: 32px;
                        border-radius: 50%;
                    }

                    @media only screen and (max-width: 992px) {
                        .medium__write {
                            visibility: hidden;
                        }
                    }
                `}</style>
                <style jsx global>{`
                    .medium__logo--container {
                        margin: 0 auto;
                    }
                    .medium__logo svg {
                        height: 27px;
                        width: 138px;
                    }
                    .medium__buttonset .isvg svg {
                        height: 20px;
                        width: 20px;
                    }
                    .isvg {
                        display: flex;
                    }
                    .isvg:not(:last-child) {
                        margin-right: 16px;
                    }
                    @media only screen and (max-width: 768px) {
                        .medium__logo--container {
                            margin: 0 auto 0 0;
                        }
                    }
                `}</style>
            </div>
        );
    }
}

export default Medium;
