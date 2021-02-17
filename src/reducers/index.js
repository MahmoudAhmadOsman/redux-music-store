import { combineReducers } from "redux";
//2nd step
//2: Reducers

//Write down here all the reducers you need for your project,
//then export so that they can be used anywhere in your project
const songsReducer = () => {
  //Return an array of objects that represents different songs [static array]
  return [
    {
      id: "1",
      title: "You are the king",
      duration: "5:05",
      author: "Jame King",
      image: "/images/music-player.png",
    },
    {
      id: "2",
      title: "Love is one",
      duration: "4:03",
      author: "Larry Morphin",
      image: "/images/music-player.png",
    },
    {
      id: "3",
      title: "Me and you",
      duration: "6:09",
      author: "Sarah Lews",
      image: "/images/music-player.png",
    },
    {
      id: "4",
      title: "My world is coding",
      duration: "3:01",
      author: "Aston Ferry",
      image: "/images/music-player.png",
    },
  ];
};

//2nd Reducer
//const initialState = {};
// const selectedSongReducer = (selectedSong = initialState, action)
const selectedSongReducer = (selectedSong = null, action) => {
  //Now, check the type of action. This type of action is inside action/index.js
  if (action.type === "SONG_SELECTED") {
    //if that is the case, then return the payload which is also inside action/index.js
    return action.payload;
  }
  //If the action is not equal to SONG_SELECTED
  //then return whatevern the selected song is
  return selectedSong;
};

//3. Now, Combine these two reducers and export

export default combineReducers({
  //The key of these objects are the keys that show up inside the state object
  //key:value
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

//Now, other files in your project can access to these combined Reducers
