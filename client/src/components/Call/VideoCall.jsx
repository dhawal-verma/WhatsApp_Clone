import { useStateProvider } from "@/context/StateContext";
import React,{ useEffect } from "react";
import dynamic from "next/dynamic";
const Container = dynamic(() => import("./Container"), { ssr: false });

function VideoCall() {
  const [{ videoCall, socket, userInfo }, dispatch] = useStateProvider();

  useEffect(() => {
    if (videoCall.type === "out-going") {
      // console.log(userInfo.profileImage)
      socket.current.emit("outgoing-video-call", {
        to: videoCall.id,
        from: {
          id: userInfo.id,
          // profileImage: userInfo.profileImage,
          name: userInfo.name,
        },
        callType: videoCall.callType,
        roomId: videoCall.roomId,
      });
    }
  }, [videoCall]);


  return <Container data={videoCall}/>
}

export default VideoCall;
