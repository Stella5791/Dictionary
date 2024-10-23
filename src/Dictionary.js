import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  // eslint-disable-next-line
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = "b4697434f3a4b96oc63c0bff5tca4166";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${Keyword}&key=${imagesApiKey}&per_page=4`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1> What word would you like to search for?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="Search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggested words: autumn, winter, spring</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
