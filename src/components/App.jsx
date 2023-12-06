import React from "react";
import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from "./SearchBar";

function App() {
  const [gifIdList, setGifIds] = React.useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  const [selectedId, setSelectedId] = React.useState("gG6OcTSRWaSis");
  // const = selectedIdState = React.useState("gG6OcTSRWaSis")
  // const selectedId = selectedIdState[0]
  // const setSelectedId = selectedIdState[1]

  // const selectedId = "gG6OcTSRWaSis";
  return (
    <div>
      <div className="left-scene">
        <SearchBar setGifIds={setGifIds} />
        <div className="selected-gif"><Gif gifId={selectedId} /></div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={gifIdList} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}

export default App;
