import React, { useState, useEffect } from "react";
import moment from "moment";
import BirthdayCard from "./BirthdayCard";
import Post from "./Post";
import Video from "./Video";
import SectionTitle from "components/sectionTitle";
import { getStoriesData } from "./endpoints";
import { useAuth } from "features/userData";

import "./news-feed-section.scss";

const NewsFeedSection = () => {
  const { userData } = useAuth();
  const [storiesData, setStoriesData] = useState([]);
  const userImg = userData?.userImage;

  useEffect(() => {
    const fillData = async () => {
      const storiesData = await getStoriesData();
      setStoriesData(storiesData);
    };
    fillData();
  }, []);

  return (
    <div className="news-feed-section">
      <SectionTitle title="News and Stories" />
      <div className="news-feed-section__container">
        {storiesData.map((elem) => {
          if (elem.type === "birthday") {
            return (
              <BirthdayCard
                key={elem.id}
                name={elem.userName}
                picture={elem.userImage}
                date={moment(elem.birthdayDate).format("MMM Do")}
                wishes={elem.wishes}
                comments={elem.comments}
                userImage={userImg}
              />
            );
          } else if (elem.type === "post") {
            return (
              <Post
                key={elem.id}
                name={elem.userName}
                picture={elem.userImage}
                date={elem.birthdayDate}
                comments={elem.comments}
                location={elem.postLocation}
                time={moment(elem.postDate).fromNow()}
                content={elem.postImage}
                likes={elem.likes}
                userImage={userImg}
              />
            );
          } else if (elem.type === "video") {
            return (
              <Video
                key={elem.id}
                id={elem.id}
                name={elem.userName}
                picture={elem.userImage}
                date={elem.birthdayDate}
                comments={elem.comments}
                location={elem.postLocation}
                time={moment(elem.postDate).fromNow()}
                content={elem.postVideo}
                likes={elem.likes}
                userImage={userImg}
              />
            );
          } else {
            return "other type of post";
          }
        })}
      </div>
    </div>
  );
};

export default NewsFeedSection;
