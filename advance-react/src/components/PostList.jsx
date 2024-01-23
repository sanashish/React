import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
      console.log("Cleaning Up");
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Message />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
