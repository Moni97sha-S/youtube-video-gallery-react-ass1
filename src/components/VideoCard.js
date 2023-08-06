import React, { useState } from "react";
import "../styles/VideoCard.css";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

export default function VideoCard(props) {
//   console.log(props);
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(props.card.likes);
  function like() {
    setClick(!click);
    console.log(count);
    setCount(count + 1);
    console.log(count);
  }
  
  return (
    <>
      <div
        className="videoCard"
        style={{ border: "2px solid black" }}
      >
        <div className="channel-details">
          <img
            id="channel-logo"
            className="channel-scope"
            src={props.card.channelLogoUrl}
            alt="Logo"
            width="48"
            // draggable="false"
          />
          <h3 className="channel-name">{props.card.channelName}</h3>
        </div>
        <img
          id="image-thumbnail"
          className="thumbnail-scope"
          src={props.card.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="videoCard-details">
          <h2 className="videoCard-title">{props.card.title}</h2>
          <div className="videoCard-desc">
            <span onClick={like}> {
                click ? (
                    <FaThumbsUp     
                        size={20}
                        style={{
                            color: "white",
                            backgroundColor: "black",
                            textAlign: "center"
                        }}
                    />
                ) : (
                    <FaRegThumbsUp
                        size={20}
                        style={{
                            color: "white",
                            backgroundColor: "black",
                            textAlign: "center"
                        }}
                    />
                )
            } </span>
            <span>{click ? count : props.card.likes} likes</span>
            <span id="separator"> . </span>
            <span>{props.card.views} views</span>
          </div>
        </div>
      </div>
    </>
  );
}
