import React from "react";

function Filtered(props: any) {
  const search = props.search;
  const friendList = props.friendList;
  const filteredList = friendList.filter((value: string) => {
    if (value.toLowerCase().indexOf(search.toLowerCase()) === -1) {
      return false;
    } else {
      return true;
    }
  });
  if (filteredList.length === 0) {
    return (
      <div>
        <p>No friends found.</p>
      </div>
    );
  }
  return (
    <div>
      {filteredList.map((value: string) => {
        return (
          <div key={value}>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Filtered;
