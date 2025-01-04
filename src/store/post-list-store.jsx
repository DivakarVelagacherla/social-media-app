import { Children, createContext } from "react";

const PostList = createContext([]);

const PostListProvider = ({ Children }) => {
  return <PostList.Provider value={[]}>{Children}</PostList.Provider>;
};

export default PostListProvider;
