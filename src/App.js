import Users from "./Components/users/Users";
import "./styles.css";
import data from "./utils/data.json";

import VideoPlayer from "../src/Components/video/Video"

 function App() {
  return (
    <div className="App">
      <VideoPlayer />
      {/* <Users /> */}
    </div>
  );
}
export default App ;
