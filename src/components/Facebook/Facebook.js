import React from 'react';

const Facebook = props => {
    return (
        <div className="nav__wrapper">
            <nav className="nav__facebook">
                <div className="facebook" role="navigation">
                    <div className="facebook__brand">
                        <img
                            src={'/static/icons/facebook.svg'}
                            alt="facebook icon"
                            className="nav__facebook--icon"
                        />
                    </div>

                    <div className="facebook__search">
                        <form>
                            <input placeholder="Search" />
                            <span>
                                <img
                                    src={'/static/icons/search.svg'}
                                    alt="search icon"
                                    className="nav__facebook--search"
                                />
                            </span>
                        </form>
                    </div>

                    <div className="right">
                        <div className="user">
                            <div className="jianyuan">
                                <img
                                    src={'/static/icons/user.svg'}
                                    alt="user icon"
                                    className="nav__facebook--user"
                                />{' '}
                                Jianyuan
                            </div>
                            <div className="home">Home</div>
                        </div>

                        <div className="info">
                            <img
                                className="friends--icon"
                                src={'/static/icons/friends.svg'}
                                alt="friends icon"
                            />
                            <img
                                className="messenger--icon"
                                src={'/static/icons/messenger.svg'}
                                alt="messenger icon"
                            />
                            <img
                                className="globe--icon"
                                src={'/static/icons/globe.svg'}
                                alt="globe icon"
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                .nav__wrapper {
                    background-color: #4267b2;
                }
                .facebook {
                    width: 100%;
                    color: #fff;
                    align-items: center;
                    display: flex;
                }
                .facebook div {
                    display: flex;
                }
                .facebook img {
                    height: 28px;
                    width: 28px;
                    padding: 0 8px;
                }
                .facebook .facebook__search {
                    width: 40%;
                    margin-right: auto;
                }
                .facebook .facebook__search form {
                    position: relative;
                    width: 100%;

                    display: flex;
                    align-items: center;
                }
                .facebook .facebook__search form input {
                    box-sizing: border-box;
                    border: none;
                    width: 100%;
                    height: 24px;
                    font-size: 12px;

                    padding: 2px 5px;
                }
                .facebook .facebook__search form input:focus {
                    outline: none;
                }
                .facebook .facebook__search form input:focus + span {
                    background-color: #4080ff;
                }
                .facebook .facebook__search form span {
                    display: flex;
                    justify-items: center;
                    align-items: center;
                    height: 100%;
                    background-color: #f5f6f7;
                    transition: background-color 0.2s ease;

                    position: absolute;
                    right: 0;
                    top: 0;
                }
                .facebook .facebook__search form span img {
                    height: 15px;
                    width: 25px;
                }

                .user {
                    font-weight: bold;
                    position: relative;

                    display: flex;
                    align-items: center;
                }
                .user .nav__facebook--user {
                    border-radius: 100px;
                    height: 20px;
                    width: 20px;
                }
                .jianyuan {
                    display: flex;
                    align-items: center;
                }
                .home {
                    margin-left: 10px;
                    padding-left: 10px;
                }
                .home:before,
                .home:after {
                    background: rgba(0, 0, 0, 1);
                    content: '';
                    display: block;
                    height: 18px;
                    left: -10px;
                    position: relative;
                    top: 0;
                    width: 1px;
                }
                .home:after {
                    left: 10px;
                }
                .info {
                    margin-left: 10px;
                }
                .info img {
                    cursor: pointer;
                    height: 20px;
                    width: 20px;
                }
                .info:after {
                    background: rgba(0, 0, 0, 1);
                    content: '';
                    display: block;
                    height: 18px;
                    left: 0;
                    position: relative;
                    top: 0;
                    width: 1px;
                }
            `}</style>
        </div>
    );
};

export default Facebook;
