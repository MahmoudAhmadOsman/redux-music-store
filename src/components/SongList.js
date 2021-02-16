import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="container" key={song.title}>
          <h1>{song.title}</h1>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}

//state = get all the data inside redux store
const mapStateToProps = (state) => {
  console.log(state);
  //return state;
  //get all the songs now from the state
  return { songs: state.songs };
};

//Connect the SongList to App using connect(param1, param2) method from redux
export default connect(mapStateToProps)(SongList);
