import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import axios from  'axios';

class Portfolios extends React.Component {

    static async getInitialProps () {
        let posts ={}
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            posts = response.data
            console.log(response.data);
        }
        catch (err) {
            console.error(err)
        }
        return { posts : posts.slice(0,10)}
    }

    //dynamic links

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <Link key={post.id} href="/portfolio/[id]" as={`/portfolio/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            )
        })
    }


    render() {
        const {posts} = this.props
        return (
            <BaseLayout>
                <h1>Portfolios page</h1>
                {
                    this.renderPosts(posts)
                }
            </BaseLayout>
        )
    }
}

export default Portfolios;