import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Divider from "./Divider";
import PostComment from "./PostComment";
import LikeButton from "../LikeButton";
import WishButton from "./WishButton";
import CommentButton from "./CommentButton";
import { useAuth } from "features/userData";

import "./comments-section.scss";

const CommentsSection = ({
  likes,
  wishes,
  allComments,
  userImage,
  isBirthday,
}) => {
  const { userData } = useAuth();
  const userName = userData?.userName;

  const date = new Date();

  const [comments, setComments] = useState(allComments);
  const [text, setText] = useState("");
  const [numOfComm, setNumOfComm] = useState(comments.length);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleInputSubmit = () => {
    if (text !== "") {
      const newComment = {
        userName: userName,
        date: date,
        comment: text,
      };
      setComments([...comments, newComment]);
      setText("");
      setNumOfComm(numOfComm + 1);
    }
  };

  return (
    <div className="comments-section">
      <div className="comments-section__buttons">
        {isBirthday ? (
          <WishButton countOfWishes={wishes} />
        ) : (
          <LikeButton countOfLikes={likes} isCountOfLikes={true} />
        )}
        <CommentButton countOfComments={numOfComm} />
      </div>

      <Divider />

      <div className="comments-section__comments">
        {comments.map((comm) => (
          <PostComment
            key={comm.date}
            name={comm.userName}
            date={moment(comm.date).format("MM/DD/YYYY h:mm A")}
            comment={comm.comment}
          />
        ))}
      </div>
      <div>
        <Divider />
        <div className="comments-section__bottom">
          <img
            className="comments-section__bottom__img"
            src={userImage}
            alt=""
          />

          <textarea
            className="comments-section__bottom__comment-input"
            onChange={handleInputChange}
            placeholder="Leave a comment..."
            value={text}
          ></textarea>

          <button
            className="comments-section__bottom__post-btn"
            onClick={handleInputSubmit}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

CommentsSection.propTypes = {
  allComments: PropTypes.array,
  userImage: PropTypes.node,
  likes: PropTypes.number,
  wishes: PropTypes.number,
  isBirthday: PropTypes.bool,
};

export default CommentsSection;
