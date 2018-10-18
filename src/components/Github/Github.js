import React from 'react';

import SVG from 'react-inlinesvg';

const Github = props => {
    return (
        <div className="nav__wrapper">
            <nav className="nav__github">
                <img
                    className="github--logo"
                    src={'../../../static/icons/github.svg'}
                    alt="github logo"
                />

                <div className="github--main">
                    <input
                        className="github--search"
                        placeholder="Search or jump to..."
                    />

                    <ul className="github--tabs">
                        <li className="github--tab">
                            <a href="#">Pull requests</a>
                        </li>
                        <li className="github--tab">
                            <a href="#">Issues</a>
                        </li>
                        <li className="github--tab">
                            <a href="#">Marketplace</a>
                        </li>
                        <li className="github--tab">
                            <a href="#">Explore</a>
                        </li>
                    </ul>

                    <div className="github--command">
                        <div className="github--expand github--add">
                            <SVG
                                className="github--plus"
                                src={'/static/icons/plus.svg'}
                                alt="add project"
                            />
                            {/* <SVG
                                className="caret"
                                src={'/static/icons/caret-down.svg'}
                                alt="expand view"
                            /> */}
                            <span className="caret" />
                        </div>

                        <div className="github--expand github--profile">
                            <SVG
                                className="github--user"
                                src={'/static/icons/profile.svg'}
                                alt="view profile"
                            />
                            {/* <SVG
                                className="caret"
                                src={'/static/icons/caret-down.svg'}
                                alt="expand view"
                            /> */}
                            <span className="caret" />
                        </div>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                .nav__wrapper {
                    background-color: #24282d;
                }
                .nav__github {
                    color: #000;
                    align-items: center;
                    font-family: system-ui;
                    dislay: flex;
                }
                .github--logo {
                    height: 30x;
                    width: 30px;
                }
                .github--logo svg {
                    fill: white;
                }
                .github--main {
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .github--search {
                    margin-left: 12px;
                    width: 300px;
                    box-sizing: border-box;
                    border: none;
                    border-radius: 3px;
                    padding: 6px 8px;
                    font-size: 16px;
                    background-color: #484b4f;
                }
                .github--search:focus {
                    outline: none;
                    background-color: #fff;
                }
                .github--tabs {
                    list-style: none;
                    padding: 0;
                    margin-right: auto;

                    display: flex;
                }
                .github--tab {
                    color: #fff;
                    margin-left: 12px;
                    font-weight: 600;
                    font-size: 18px;
                }
                .github--tab:not(:first-child) {
                    margin-left: 12px;
                }
                .github--tab a {
                    text-decoration: none;
                    color: inherit;
                }
                .github--tabs a:hover {
                    color: hsla(0, 0%, 100%, 0.75);
                }
                .github--command {
                    display: flex;
                }
                .github--expand .caret {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    vertical-align: middle;
                    content: '';
                    border: 4px solid;
                    border-right-color: transparent;
                    border-bottom-color: transparent;
                    border-left-color: transparent;
                    color: #fff;
                    margin-top: 2px;
                    margin-left: 3px;
                }
            `}</style>
            <style jsx global>{`
                .nav__github {
                    min-width: 900px;
                }
                .github--expand {
                    display: flex;
                    align-items: center;
                }
                .github--expand:hover {
                    cursor: pointer;
                }
                .github--expand .isvg svg {
                    height: 16px;
                    width: 16px;
                }
                .github--expand .github--plus svg {
                    height: 14px;
                    width: 14px;
                }
                .github--expand .isvg svg * {
                    fill: #fff;
                }
                .github--profile {
                    margin-left: 12px;
                }
            `}</style>
        </div>
    );
};

export default Github;
