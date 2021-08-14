import "./leftbar.css";
import {
  Bookmark,
  Chat,
  RssFeed,
  Event,
  Group,
  LiveHelp,
  WorkOutline,
  OndemandVideo,
} from "@material-ui/icons";
function Leftbar() {
  return (
    <div className="leftbar-wrapper">
      <div className="leftbar-container">
        <ul className="leftbar-list">
          <li className="left-bar-item">
            <RssFeed className="left-bar-item-icon" />
            <span className="left-bar-item-text">Feed</span>
          </li>
          <li className="left-bar-item">
            <Chat className="left-bar-item-icon" />
            <span className="left-bar-item-text">Chats</span>
          </li>
          <li className="left-bar-item">
            <OndemandVideo className="left-bar-item-icon" />
            <span className="left-bar-item-text">Videos</span>
          </li>
          <li className="left-bar-item">
            <Bookmark className="left-bar-item-icon" />
            <span className="left-bar-item-text">BookMarks</span>
          </li>
          <li className="left-bar-item">
            <Group className="left-bar-item-icon" />
            <span className="left-bar-item-text">Groups</span>
          </li>
          <li className="left-bar-item">
            <LiveHelp className="left-bar-item-icon" />
            <span className="left-bar-item-text">Questions</span>
          </li>
          <li className="left-bar-item">
            <Event className="left-bar-item-icon" />
            <span className="left-bar-item-text">Events</span>
          </li>
          <li className="left-bar-item">
            <WorkOutline className="left-bar-item-icon" />
            <span className="left-bar-item-text">Job</span>
          </li>
        </ul>
        <button type="button" className="more-button">
          Show More
        </button>
        <hr />
        <div className="friend">
          <img
            src="./assets/img/dom.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Wild</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/jacob.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Yacov</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/dom.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Wild</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/jacob.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Yacov</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/dom.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Wild</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/jacob.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Yacov</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/dom.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Wild</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/jacob.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Yacov</span>
        </div>
        <div className="friend">
          <img
            src="./assets/img/dom.jpg"
            alt="a young model"
            className="profile-img"
          />
          <span className="friend-name">Wild</span>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
