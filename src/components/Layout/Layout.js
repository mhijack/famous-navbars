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
    </div>
);

export default Layout;
