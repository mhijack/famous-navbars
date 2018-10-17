import React from 'react';
import Link from 'next/link';

const Layout = props => (
    <div className="links">
        <Link href="/twitter">
            <a>Twitter</a>
        </Link>
        <Link href="/facebook">
            <a>Facebook</a>
        </Link>
        <Link href="/github">
            <a>Github</a>
        </Link>
        <Link href="/Medium">
            <a>Medium</a>
        </Link>
        {props.children}{' '}
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
            nav {
                width: 70%;
                height: 46px;
                margin: 0 auto;
                min-width: 650px;
                box-shadow: 5px 10px 20px -20px rgba(85, 172, 238, 1);
                border-bottom: 1px solid rgba(238, 238, 238, 1);
                color: rgba(117, 117, 117, 1);

                display: flex;
            }
        `}</style>
    </div>
);

export default Layout;
