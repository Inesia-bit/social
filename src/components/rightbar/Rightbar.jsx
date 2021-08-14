import { Cake } from "@material-ui/icons";
import "./rightbar.css";

function Rightbar() {
  return (
    <div className="right-wrapper">
      <div className="rightbar-container">
        <div className="birthday">
          <Cake htmlColor="tomato" />
          <span>
            <strong>Peeler</strong> and <strong>5 other friends</strong>have
            their birthdays today
          </span>
        </div>
        <div className="ad">
          <img
            src="./assets/img/cola.jpg"
            alt="an advert for covid19 vaccination"
          />
        </div>
        <div className="online-friends">
          <span>
            <strong>Online Friends</strong>
          </span>
          <div className="online-friends-view">
            <div className="friends-online">
              <img src="./assets/img/dom.jpg" alt="a young model" />
              <span className="online-presence"></span>
            </div>
            <span className="online-friend-name">Wild</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rightbar;
