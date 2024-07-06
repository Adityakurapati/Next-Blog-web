import React from 'react';
import PostCard from '../postCard/postCard';
import styles from './blog.module.css';

const BlogPage=( { searchParams } ) =>
{
        console.log( searchParams )
        return (
                <section className={ styles.container }>
                        <div className={ styles.post }>
                                <PostCard />
                        </div>
                        <div className={ styles.post }>
                                <PostCard />
                        </div>
                        <div className={ styles.post }>
                                <PostCard />
                        </div>
                        <div className={ styles.post }>
                                <PostCard />
                        </div>
                </section>
        );
}

export default BlogPage;
