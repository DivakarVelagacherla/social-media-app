import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { PostList } from "../store/post-list-store.jsx";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin5Fill />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge text-bg-primary tag"
          >{`#${tag}`}</span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been <FaHeart className="heart" /> by {post.reactions}{" "}
          people.
        </div>
      </div>
    </div>
  );
};

export default Post;
