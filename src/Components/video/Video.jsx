import { useEffect,useState , useRef } from "react";
import Button from "../common/Button";

function VideoPlayer() {
  const [time,setTime] = useState(0) ;
  const ref = useRef(null);
  console.log(ref);
  const play = () =>
  {
    ref.current.play();
  };
  const pause = () => {
    ref.current.pause();
  };
  
  const skip = () =>
  {
    setInterval(() =>
    {
   setTime(time);
    },30000)
  }

useEffect (()=>
{
  skip();
},[]);
  
  return (
    <div>
      <video ref={ref} data-testid="video-container" width="400" controls

        
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4">
        
      </video>
      <div>
        <Button onClick={play}>
          PLAY
        </Button>

        <Button onClick={pause}>
          PAUSE
        </Button>

        <Button onClick={skip}>
          SKIP 30 SECONDS
        </Button>
        
      </div>
    </div>
  );
}


export default VideoPlayer;






