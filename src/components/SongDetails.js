import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  //   console.log(props);
  if (!song) {
    return (
      <div className="select-a-song">
        <small className="text-danger">No Song Selected!</small>
      </div>
    );
  }
  return (
    <section className="song-details">
      <h4>Song Details</h4>
      <p>
        <b>Title:</b> {song.title}
      </p>
      <p>
        <b>Author:</b> {song.author}
      </p>
      <p>
        <b>Duration:</b> {song.duration} mins
      </p>
    </section>
  );
};

const mapStateToProps = (state) => {
  //pull the selected song from state
  //Key:value
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
