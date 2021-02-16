import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  // renderList() {

  //   return this.props.songs.map((song) => {
  //     return (
  //       <div className="container" key={song.title}>
  //         <h1>{song.title}</h1>
  //       </div>
  //     );
  //   });
  // }

  render() {
    return (
      <section className="songs-list">
        <div className="container">
          {/* <div className="row">{this.renderList()}</div> */}
          <div className="row">
            {this.props.songs.map((song) => {
              return (
                <div className="col-md-3" key={song.id}>
                  <div className="thumbnail">
                    <img
                      src={song.image}
                      alt={song.title}
                      className="img-responsive"
                    />
                    <h3>
                      <a href={song.id + "/" + song.title}>{song.title}</a>
                    </h3>
                    <p>Author: {song.author}</p>
                    <p>Duration: {song.duration}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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
