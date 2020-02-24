import React from 'react'
import ProductsItem from './ProductsItem';
import './productsItem.css';

export const Posts = ({ posts }) => {

    return (
        <div className='posts'>
            {posts.map(post => (
                <ProductsItem keyID={post.id} post={post.title}></ProductsItem>
            ))}
        </div>
    )
}
