import React from "react";

function Search(props) {
  return (
    <div class="flex flex-row justify-around">
      <h1 class="text-5xl text-purple-500 font-bold  hover:cursor-pointer ">Movie</h1>
      <input
        value={props.value}
        placeholder="Type here to Search"
        onChange={(event) => props.setSearch(event.target.value)}
        class="w-2/5 bg-gray-500 border border-gray-300 rounded-lg py-2 px-4 block 
          focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default Search;
