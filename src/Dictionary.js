import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }npm

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="Search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
