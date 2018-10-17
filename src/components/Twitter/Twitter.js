import React from 'react';

const Twitter = props => {
    return (
        <nav className="nav__twitter">
            <ul className="twitter" role="navigation">
                <li>
                    <img
                        src={'/static/icons/home.svg'}
                        alt="home icon"
                        className="nav__twitter--home"
                    />
                    Home
                </li>

                <li>
                    <img
                        src={'/static/icons/notification.svg'}
                        alt="notification icon"
                        className="nav__twitter--notification"
                    />
                    Notifications
                </li>

                <li>
                    <img
                        src={'/static/icons/message.svg'}
                        alt="message icon"
                        className="nav__twitter--messages"
                    />
                    Messages
                </li>

                <li className="nav__twitter--container">
                    <img
                        src={'/static/icons/twitter.svg'}
                        alt="twitter icon"
                        className="nav__twitter--icon"
                    />
                </li>

                <li className="nav__search--container">
                    <form>
                        <input placeholder="Search Twitter" />
                        <img
                            src={'/static/icons/search.svg'}
                            alt="search icon"
                            className="nav__twitter--search"
                        />
                    </form>
                </li>

                <li>
                    <img
                        src={'/static/icons/user.svg'}
                        alt="user icon"
                        className="nav__twitter--user"
                    />
                </li>

                <li className="nav__tweet--container">
                    <button>Tweet</button>
                </li>
            </ul>
            <style jsx>{`
                .nav__twitter {
                    width: 70%;
                    height: 46px;
                    margin: 0 auto;
                    min-width: 650px;
                    box-shadow: 5px 10px 20px -20px rgba(85, 172, 238, 1);
                    border-bottom: 1px solid rgba(238, 238, 238, 1);
                    border-radius: 5p;
                    color: rgba(117, 117, 117, 1);

                    display: flex;
                }
                .twitter {
                    padding: 0;
                    align-items: center;
                    list-style: none;
                    width: 100%;
                    display: flex;
                }
                .twitter li {
                    cursor: pointer;

                    display: flex;
                    margin-right: 17px;
                }
                .twitter li:hover {
                    color: rgba(85, 172, 238, 1);
                }
                .twitter li:not(:last-child):not(.nav__twitter--container) {
                    margin-right: 10px;
                }
                .twitter li img {
                    height: 16px;
                    width: 16px;
                    margin-right: 3px;
                }
                .twitter li > button {
                    font-size: 12px;
                    padding: 4px 8px;
                    border: 0;
                    background: rgba(85, 172, 238, .8);
                    color: #fff;
                    border-radius: 100px;
                    height: 24px;
                }
                .twitter li > button:hover {
                    cursor: pointer;
                    background: rgba(85, 172, 238, 1);
                }
                .twitter li form input {
                    display: inline-block;
                    height: 24px;
                    padding: 8px 24px 8px 12px;
                    border: 1px solid #e6ecf0;
                    border-radius: 21px;
                    box-sizing: border-box;
                }
                .twitter .nav__twitter--container,
                .nav__twitter--icon {
                    margin: 0 auto;
                }
                .twitter input:focus,
                .twitter button:focus {
                    outline: none;
                }
                .twitter .nav__tweet--container {
                    margin-right: 0;
                }
                .twitter .nav__search--container form {
                    display: flex;
                    align-items: center;
                    position: relative;
                }
                .twitter .nav__search--container .nav__twitter--search {
                    position: absolute;
                    right: 5px;
                    top: 3px;
                }
            `}</style>
        </nav>
    );
};

export default Twitter;
