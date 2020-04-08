import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { IPost } from "../PostsRoot";

interface IPostsAllPostsVars {}

interface IPostsAllPostsData {
  posts: Array<IPost>;
}

const POSTS_ALL_POSTS = gql`
  query postsAllPosts {
    posts {
      title
      rating
    }
  }
`;

export const PostsShowQuery = () => {
  const { loading, error, data } = useQuery<
    IPostsAllPostsData,
    IPostsAllPostsVars
  >(POSTS_ALL_POSTS, {
    variables: {}
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error getting posts.</p>;
  const { posts } = data;
  return (
    <>
      <p>{posts.length} posts found.</p>
      <ul>
        {posts.map(post => (
          <li>post.title</li>
        ))}
      </ul>
    </>
  );
};