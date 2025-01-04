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

const DEFAULT_POSTS = [
  {
    id: "1",
    title: "Going to meet my love",
    body: "Excited to meet my love",
    reactions: 25,
    userId: "user-12",
    tags: ["Excited", "Love", "Loveofmylife"],
  },
  {
    id: "2",
    title: "Making my GF to Wife",
    body: "Excited for my marraige",
    reactions: 49,
    userId: "user-11",
    tags: ["Marriage", "Love", "gettingmarried"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, postListDispatcher] = useReducer(
    postListReducer,
    DEFAULT_POSTS
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
    postListDispatcher({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    postListDispatcher({
      type: "DELETE_POST",
      payload: {
        postId,
      },
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

export default PostListProvider;
