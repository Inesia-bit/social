import Timeline from "../../components/timeline/Timeline";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import TopBar from "../../components/topbar/TopBar";
import "./home.css";
function Home() {
  return (
    <>
      <TopBar />
      <div className="activity">
        <Leftbar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
