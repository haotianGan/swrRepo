import React, { useRef, useState } from "react";
import Filtered from "./Filtered";
import Other from "./Other";
function App() {
  const [search, setSearch] = useState("");
  const addFriend = useRef(document.createElement("input"));
  const [friendList, setFriendList] = useState<string[]>([]);

  return (
    <div>
      <label htmlFor="search">Search for a Friend: </label>
      <input
        type="text"
        name="search"
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
      ></input>
      <label htmlFor="addFriend">Add a Friend: </label>
      <input
        type="text"
        name="addFriend"
        defaultValue=""
        ref={addFriend}
      ></input>
      <button
        onClick={() => {
          const newFriendList: string[] = [
            ...friendList,
            addFriend.current.value,
          ];
          setFriendList(newFriendList);
          addFriend.current.value = "";
        }}
      >
        Add Friend!
      </button>
      <h3>Filtered for substring: {search}</h3>

      <Filtered friendList={friendList} search={search}></Filtered>

      <h3>Other:</h3>
      <Other friendList={friendList} search={search}></Other>
    </div>
  );
}

export default App;
