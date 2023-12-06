import React from "react";

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

function SearchBar(props) {
  const setGifIds = props.setGifIds
  function fetchGiphy(keyword) {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  }
  function handleChange(event) {
    fetchGiphy(event.currentTarget.value);
  }
  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
}

export default SearchBar;
