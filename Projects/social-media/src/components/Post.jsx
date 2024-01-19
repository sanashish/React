import { useContext } from "react";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card w-50 post-card d-flex justify-content-center">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill text-bg-primary post-tag"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-success reactions" role="alert">
        This Post has been reacted by {post.reactions} people.
      </div>
      <a href="#">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          X
        </span>
      </a>
    </div>
  );
}

export default Post;
