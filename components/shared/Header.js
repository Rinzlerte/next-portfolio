import React from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes'

class Header extends React.Component {
    render(){
        const title = this.props.title
        return (
            <React.Fragment>
                <p>{title}</p>
                 <Link href="/">
                    <a>HOME</a>
                </Link>
                <Link href="/about">
                    <a>ABOUT</a>
                </Link>
                <Link href="/blogs">
                    <a>BLOGS</a>
                </Link>
                <Link href="/cv">
                    <a>CV</a>
                </Link>
                <Link href="/portfolios">
                    <a>PORTFOLIO</a>
                </Link>
                <NextLink route='test' params={{id: '1'}}>
                    <a>Test 1</a>
                </NextLink>
                <NextLink route='/test/2'><a>Test 2</a></NextLink>
                <style jsx>
                    {`
                    a{
                        font-size: 20px;
                        text-decoration: none;
                    }
                    
                    `}
                </style>
            </React.Fragment>
        );
    };
}

export default Header;