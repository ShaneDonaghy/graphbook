import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './components/post';
import Loading from './components/loading';
import Error from './components/error';
import { GET_POSTS } from '../server/apollo/queries/getPosts';
import { ADD_POST } from '../server/apollo/mutations/addPost';

const Feed = () => {
    const [addPost] = useMutation(ADD_POST, {
        optimisticResponse: {
            __typename: "mutation",
            addPost: {
                __typename: "Post",
                text: postContent,
                id: -1,
                user: {
                    __typename: "User",
                    username: "Loading . . .",
                    avatar: "/public/fixed/loading.gif"
                }
            }
        },
        update(cache, { data: { addPost } }) {
            cache.modify({
                fields: {
                    postsFeed(existingPostsFeed) {
                        const { posts: existingPosts } = existingPostsFeed;
                        const newPostRef = cache.writeFragment({
                            data: addPost,
                            fragment: gql`
                                fragment NewPost on Post {
                                    id
                                    type
                                }
                            `
                        });
                        return {
                            ...existingPostsFeed,
                            posts: [newPostRef, ...existingPosts]
                        };
                    }
                }
            });
        }
    });
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const loadMore = (fetchMore) => {
        const self = this;
        fetchMore({
            variables: {
                page: page + 1,
            },
            updateQuery(previousResult, { fetchMoreResult }) {
                if (!fetchMoreResult.postsFeed.posts.length) {
                    setHasMore(false);
                    return previousResult;
                }
                setPage(page + 1);
                const newData = {
                    postsFeed: {
                        __typename: 'PostFeed',
                        posts: [
                            ...previousResult.postsFeed.posts,
                            ...fetchMoreResult.postsFeed.posts
                        ]
                    }
                };
                return newData;
            }
        });
    }
    const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
        pollInterval: 5000,
        variables: {
            page: 0,
            limit: 10
        }
    });
    const [postContent, setPostContent] = useState('');
    if (loading) return <Loading />;
    if (error) return <Error><p>{error.message}</p></Error>;
    const { postsFeed } = data;
    const { posts } = postsFeed;

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
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => loadMore(fetchMore)}
                    hasMore={hasMore}
                    loader={<div className="loader" key={"loader"}>Loading . . .</div>}
                >
                    {posts.map((post, i) =>
                        <Post key={post.id} post={post} />
                    )}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default Feed