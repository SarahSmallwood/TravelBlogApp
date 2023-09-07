import react from 'react';
import ListPosts from "../../components/ListPosts/ListPosts";
import styles from './ViewAll.modules.css';

export default function ViewAll(posts) {
    return (
        <>
        <h1 className='head'>View All Travel Blogs</h1>
        <ListPosts posts={posts}/>
        </>
    )
}