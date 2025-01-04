import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store.jsx";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <>
      <form className="create-post" onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter user Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your user ID"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter post title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            rows="5"
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell me more about it..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No of reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="no of reactions..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here..
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter hashtags.."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
