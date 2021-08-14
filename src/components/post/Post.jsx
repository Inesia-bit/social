import {
  EmojiEmotions,
  Label,
  LocationOn,
  PermMedia,
} from "@material-ui/icons";
import "./post.css";

function Post() {
  return (
    <div className="post-container">
      <div className="user-posting">
        <img
          src="./assets/img/dami.jpg"
          alt="profile pic"
          className="user-posting-image"
        />
        <input type="text" placeholder="What do you have to say Dami?" />
      </div>
      <hr />
      <div className="post-actions">
        <ul className="post-actions-list">
          <li className="post-action">
            <PermMedia htmlColor="tomato" />
            <span className="post-actions-text">Photos or Videos</span>
          </li>
          <li className="post-action">
            <Label htmlColor="blue" />
            <span className="post-actions-text">Photos or Videos</span>
          </li>
          <li className="post-action">
            <LocationOn htmlColor="green" />
            <span className="post-actions-text">Photos or Videos</span>
          </li>
          <li className="post-action">
            <EmojiEmotions htmlColor="goldenrod" />
            <span className="post-actions-text">Photos or Videos</span>
          </li>
        </ul>
        <button type="text" className="share-post-button">
          Share
        </button>
      </div>
    </div>
  );
}

export default Post;
