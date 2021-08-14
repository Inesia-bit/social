import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./topbar.css";

function TopBar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <h2 className="logo">DownSocial</h2>
      </div>
      <div className="topbar-mid">
        <div className="search">
          <Search className="search-icon" />

          <input
            type="text"
            className="topbar-search-input"
            placeholder="search for friends"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <a href="" className="topbar-link">
            Homepage
          </a>
          <a href="" className="topbar-link">
            TimeLine
          </a>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <img
              src="/assets/img/dami.jpg"
              className="topbar-profile-img"
              alt="a young man wearing sunshades"
            />
            <span className="topbar-icon-badge">3</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">1</span>
          </div>

          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
