import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import SongDetails from "./SongDetails";
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <section className="song-list" key={song.id}>
          <div>
            <h4>
              <a href={song.id + "/" + song.title}>{song.title}</a>
            </h4>

            <button
              onClick={() => this.props.selectSong(song)}
              className="btn btn-outline-info btn-sm"
            >
              Select
            </button>
          </div>
        </section>
      );
    });
  }

  render() {
    // console.log(this.props);
    return (
      <section className="songs-list">
        <div>{this.renderList()}</div>
      </section>
    );
  }
}

//Create a fun that retuns the original state
//state = get all the data inside redux store
const mapStateToProps = (state) => {
  //console.log(state);
  //return state;
  //get all the songs now from the state
  return { songs: state.songs };
};

//Connect the SongList to App using connect(param1, param2) method from redux
export default connect(mapStateToProps, {
  //When select button is clicked
  //selectSong or = then pass it to the component as props
  selectSong: selectSong, //Action creator
})(SongList);
