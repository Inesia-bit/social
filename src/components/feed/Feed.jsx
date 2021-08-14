import { Favorite, MoreVert, ThumbUp } from "@material-ui/icons";
import { useState } from "react";
import "./feed.css";

export default function Feed() {
  let [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLiked] = useState(false);
  const [likeButtonColor, setLikeButtonColor] = useState("none");

  const handleLikes = () => {
    setIsLiked(!isLike);

    if (isLike) {
      setLikeCount(likeCount + 1);
      setLikeButtonColor("blue");
    } else {
      likeCount <= 0
        ? setLikeCount((likeCount = 0))
        : setLikeCount(likeCount - 1);

      setLikeButtonColor("none");
    }
  };
  return (
    <div className="feed-container">
      <div className="feed-top">
        <div className="feed-post-user">
          <img src="./assets/img/dom.jpg" alt="user" />
          <span className="post-username">Wild Boar</span>
          <span className="post-date">3 minutes ago</span>
        </div>
        <div className="post-options">
          <MoreVert />
        </div>
      </div>
      <div className="feed-center">
        <span className="feed-post-text"> We wilding</span>
        <img
          src="./assets/img/canopy.jpg"
          alt="a man walking on a wildlife canopy"
        />
      </div>
      <div className="feed-bottom">
        <div className="feed-reaction">
          <button type="button" onClick={handleLikes}>
            <ThumbUp htmlColor={likeButtonColor} />
            {/* <Favorite htmlColor="red" /> */}
          </button>

          <span className="count">{likeCount}</span>
        </div>
        <div className="feed-comment">20 comments</div>
      </div>
    </div>
  );
}
