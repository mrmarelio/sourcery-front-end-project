import React from "react";
import PropTypes from "prop-types";
import CommentsSection from "./CommentsSection";
import PostCardTop from "./PostCardTop";
import "./post.scss";

const Post = ({
  name,
  picture,
  location,
  time,
  content,
  likes,
  comments,
  userImage,
}) => {
  return (
    <div className="post">
      <PostCardTop
        picture={picture}
        name={name}
        location={location}
        time={time}
      />

      <div className="post__content">
        <img className="post__content__img" src={content} alt="" />
      </div>

      <CommentsSection
        isBirthday={false}
        likes={likes}
        allComments={comments}
        userImage={userImage}
      />
    </div>
  );
};

Post.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.node,
  location: PropTypes.string,
  time: PropTypes.string,
  content: PropTypes.node,
  likes: PropTypes.number,
  comments: PropTypes.array,
  userImage: PropTypes.node,
};

export default Post;
