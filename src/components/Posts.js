import React from 'react'
import ProductsItem from './ProductsItem';
import './productsItem.css';

// import SearchBar from './SearchBar';


export const Posts = ({ posts }) => {

    return (
        <div className='posts'>
            {/* <SearchBar /> */}
            {posts.map(post => (
                <ProductsItem keyID={post.id} post={post.title}></ProductsItem>
            ))}
        </div>
    )
}
