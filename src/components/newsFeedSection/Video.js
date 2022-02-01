import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import PlayButton from "assets/icons/news-feed-icons/play-button.svg";
import CommentsSection from "./CommentsSection";
import PostCardTop from "./PostCardTop";
import "./video.scss";

const Video = ({
  name,
  picture,
  location,
  time,
  content,
  likes,
  comments,
  userImage,
  id,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const video = useRef(id);

  const playVideo = () => {
    video.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    video.current.pause();
    setIsPlaying(false);
  };

  const showButtonOnEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video">
      <PostCardTop
        picture={picture}
        name={name}
        location={location}
        time={time}
      />
      <div className="video__content">
        <video
          ref={video}
          className="video__content__player"
          onClick={pauseVideo}
          src={content}
          onEnded={showButtonOnEnded}
        >
          <track kind="captions"></track>
        </video>

        {!isPlaying && (
          <button className="video__content__play-btn" onClick={playVideo}>
            <img
              className="video__content__play-btn__img"
              src={PlayButton}
              alt="play button"
            />
          </button>
        )}
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

Video.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.node,
  location: PropTypes.string,
  time: PropTypes.string,
  content: PropTypes.node,
  likes: PropTypes.number,
  comments: PropTypes.array,
  userImage: PropTypes.node,
  id: PropTypes.string,
};

export default Video;
