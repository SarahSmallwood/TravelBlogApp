import react from 'react';
import ListPosts from "../../components/ListPosts/ListPosts";

export default function ViewAll(posts) {
    return (
        <>
        <h1>View All Travel Blogs</h1>
        <ListPosts posts={posts}/>
        </>
    )
}