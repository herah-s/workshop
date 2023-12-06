import React from "react";

// const App = () => {} same as
function Gif(props) {
  // const id = "gG6OcTSRWaSis";
  const { gifId, setSelectedId } = props;

  function handleClick() {
    // console.log("click");
    setSelectedId(gifId);
  }

  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  return (
    <img className="gif" src={url} alt="gif" onClick={handleClick} />
  );
}

export default Gif;
