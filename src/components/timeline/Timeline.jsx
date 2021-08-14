import { TimelineOutlined } from "@material-ui/icons";
import Post from "../post/Post";
import Feed from "../feed/Feed";
import "./timeline.css";

function Timeline() {
  return (
    <div className="timeline-wrapper">
      <Post />
      <Feed />
    </div>
  );
}
export default Timeline;
