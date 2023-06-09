import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_POSTS = gql`{
    posts {
        id
        text
        user {
            avatar
            username
        }
    }
}`;

const ADD_POST = gql`
    mutation addPost ($post : PostInput!) {
        addPost(post: $post){
            id
            text
            user {
                username
                avatar
            }
        }
    }`;

const Feed = () => {
    const [addPost] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            cache.modify({
                fields: {
                    posts(existingPosts = []) {
                        const newPostRef = cache.writeFragment({
                            data: addPost,
                            fragment: gql`
                        fragment NewPost on Post {
                            id
                            type
                        }`
                        });
                        return [newPostRef, ...existingPosts];
                    }
                }
            });
        }
    });
    const { loading, error, data } = useQuery(GET_POSTS);
    const [postContent, setPostContent] = useState('');
    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;
    const { posts } = data;

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost({ variables: { post: { text: postContent } } });
        setPostContent('');
    };

    return (
        <div>
            <div className="postForm">
                <form onSubmit={handleSubmit}>
                    <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="Write your custom post!" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="feed">
                {posts.map((post, i) =>
                    <div key={post.id} className={'post ' + (post.id < 0 ? 'optimistic' : '')}>
                        <div className="header">
                            <img src={post.user.avatar} />
                            <h2>{post.user.username}</h2>
                        </div>
                        <p className="content">{post.text}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Feed