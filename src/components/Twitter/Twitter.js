import React from 'react';

// import HomeLogo from '/static/home.svg';
// import TwitterLogo from "/static/icons/twitter.svg";
// import NotificationLogo from '../../assets/img/icons/notification.svg';
// import MomentLogo from '../../assets/img/icons/moment.svg';
// import MessageLogo from '../../assets/img/icons/message.svg';

const Twitter = props => {
    return (
        <nav className="nav__twitter">
            <ul className="twitter" role="navigation">
                <li><img src={"/static/icons/home.svg"} alt="home icon" />Home</li>
                <li><img src={"/static/icons/notification.svg"} alt="notification icon"/>Notifications</li>
                <li><i class="fa fa-envelope-o"></i>Messages</li>
                <li><i class="fa fa-twitter"></i></li>
                <li><form><input placeholder="search twitter"/><i class="fa fa-search"></i></form></li>
                <li><i class="fa fa-user-circle-o"></i></li>
                <li><button>tweet</button></li>
            </ul>
            <style jsx>{`
                .twitter {
                    padding: 0;
                    list-style: none;
                }
            `}</style>
        </nav>
    );
};

export default Twitter;
