import react from 'react';
import BlogPost from "../../components/BlogPost/BlogPost";

export default function BlogPostPage(posts) {
    return (
        <>
        <h1>Edit or Delete Posts</h1>
        <BlogPost posts={posts}/>
        </>
    )
}