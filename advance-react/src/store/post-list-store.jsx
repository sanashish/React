import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Ayodhya",
    body: "Radhe Radhe Friends, I am going to Ayodhya for Pran Pratishtha Ceremony of Shri Ram Mandir.",
    reactions: 2157,
    userId: "user-1",
    tags: ["Travel", "Jai Shree Ram", "Sanatan"],
  },
  {
    id: "2",
    title: "Half Day Holiday Declared",
    body: "Due to the overwhelming sentiment of the employees and requests from them, Central Government announces half day closing till 2:30 pm on 22nd January 2024, at all Central Government offices, Central institutions and Central industrial establishments throughout India on the occasion of Ram Temple pranpratishtha ceremony.",
    reactions: 3459,
    userId: "user-2",
    tags: ["News", "Central Govt", "Celebration"],
  },
];

export default PostListProvider;
