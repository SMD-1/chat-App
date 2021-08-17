import profile from "../../assets/images/user3.jpg";
import * as MaterialIcon from "react-icons/md";
import post from "../../assets/posts/post2.jpg";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={profile} alt="user-profile" />
            <div className="postDetails">
              <span className="postUserName">Dan shaikh</span>
              <small>
                <span className="postDate">1hr ago</span>
              </small>
            </div>
          </div>
          <div className="postTopRight">
            <MaterialIcon.MdMoreVert className="postTopIcon" size="1.5rem" />
          </div>
        </div>
        <hr className="postHr" />
        <div className="postCenter">
          <span className="caption">
            <p> Caption will be Here :)</p>
          </span>
          <img src={post} alt="post1" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <MaterialIcon.MdThumbUp
              className="postBottomIcon"
              color="#1D4ED8"
            />
            <MaterialIcon.MdFavorite
              className="postBottomIcon"
              color="#E11D48"
            />
            <span className="likeCount">234</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">10 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
