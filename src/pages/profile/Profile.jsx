import Leftbar from "../../components/leftbar/Leftbar";
import TopBar from "../../components/topbar/TopBar";
import Feed from "../../components/feed/Feed";

function Profile() {
  return (
    <div className="profile-wrapper">
      <TopBar />
      <Leftbar />
      <Feed />
    </div>
  );
}
export default Profile;
