import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";

function PostList() {
  const { postList, addPosts } = useContext(PostListData);

  const handleOnGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <Message onGetPostClick={handleOnGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
