import React from "react";
import Gif from "./Gif";

function GifList(props) {
  const { gifIdList, setSelectedId } = props;

  return (
    <div className="gif-list">
      { gifIdList.map((gifId) => <Gif gifId={gifId} key={gifId} setSelectedId={setSelectedId} />) }
    </div>
  );
}

export default GifList;
