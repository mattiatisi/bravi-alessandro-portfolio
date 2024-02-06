import React from "react";
import VideoPlayer from "./VideoPlayer";

const ListItem = ({ item }) => {
  return (
    <li className="delete-margin">
      {item.urlImage ? (
        <img
          className="full-height-width"
          src={item.urlImage}
          alt={item.name}
          loading="lazy"
        />
      ) : (
        <div className="placeholder-image">{item.urlImage}</div>
      )}
      {item.urlVideo ? (
        <VideoPlayer item={item} />
      ) : (
        <div className="placeholder-video">{item.posterImg}</div>
      )}
    </li>
  );
};

export default ListItem;
