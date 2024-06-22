import React from "react";

export const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 max-w-sm shadow-lg">
      <img
        className="rounded-lg w-full"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="truncate">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
