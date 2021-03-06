import React from 'react';
import Link from 'next/link';

const Layout = props => (
    <div className="links">
        {props.children}{' '}
        <Link href="/twitter">
            <a>Twitter</a>
        </Link>
        <Link href="/facebook">
            <a>Facebook</a>
        </Link>
        <Link href="/github">
            <a>Github</a>
        </Link>
        <Link href="/medium">
            <a>Medium</a>
        </Link>
        <Link href="/slack">
            <a>Slack</a>
        </Link>
        <div className="placeholder-div">
            This is a placeholder div with a height of 2000px to allow scrolling.
        </div>
        <style jsx>{`
            .links {
                margin: 0 auto;

                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
            .links a {
                text-decoration: none;
                display: inline-block;
                border-bottom: 1px solid #fff;
            }

            .links a:hover {
                border-bottom: 1px solid black;
            }
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
            }
            nav {
                width: 70%;
                height: 55px;
                margin: 0 auto;
                min-width: 650px;
                color: rgba(117, 117, 117, 1);

                display: flex;
            }
            .nav__wrapper {
                width: 100%;
                box-shadow: 5px 10px 20px -20px rgba(85, 172, 238, 1);
                border-bottom: 1px solid rgba(238, 238, 238, 1);
            }
            .placeholder-div {
                height: 2000px;
            }
        `}</style>
    </div>
);

export default Layout;
