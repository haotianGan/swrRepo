import React, { useState } from "react";
import "./App.css";

function Song(props) {
    const { artist, title } = props.info;
    const setList = props.parentSetList;
    const parentList = props.parentSongList;
    return (
        <div className="song">
            <h3>{title}</h3>
            <p>By: {artist}</p>
            <button
                type="button"
                onClick={() => {
                    setList(
                        parentList.filter((value, index, array) => {
                            if (
                                value.artist === artist &&
                                value.title === title
                            )
                                return false;
                            else return true;
                        })
                    );
                }}
            >
                Delete
            </button>
        </div>
    );
}

function App(props) {
    const [songList, setList] = useState([
        { artist: "Kishi Bashi", title: "New Bright Whites" },
    ]);
    const [artistValue, setArtist] = useState("");
    const [titleValue, setTitle] = useState("");
    return (
        <React.Fragment>
            <form>
                <label>
                    Song:
                    <input
                        type="text"
                        name="name"
                        value={titleValue}
                        onInput={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Artist:
                    <input
                        type="text"
                        name="name"
                        value={artistValue}
                        onInput={(e) => setArtist(e.target.value)}
                    />
                </label>
                <input
                    type="submit"
                    value="Submit"
                    onClick={(e) => {
                        e.preventDefault();
                        setList(
                            songList.concat({
                                artist: artistValue,
                                title: titleValue,
                            })
                        );
                        setArtist("");
                        setTitle("");
                    }}
                />
            </form>
            {songList.map((value, index) => {
                return (
                    <Song
                        info={value}
                        parentSetList={setList}
                        parentSongList={songList}
                    ></Song>
                );
            })}
        </React.Fragment>
    );
}

export default App;
