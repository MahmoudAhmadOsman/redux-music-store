import { combineReducers } from "redux";
//2
//2: Reducers

//Write down here all the reducers you need for your project,
//then export so that they can be used anywhere in your project
const songReducer = () => {
  //Return an array of objects that represents different songs [static array]
  return [
    {
      title: "You are the king",
      duration: "5:05",
    },
    {
      title: "Love is one",
      duration: "4:03",
    },
    {
      title: "Me and you",
      duration: "6:09",
    },
    {
      title: "My world is coding",
      duration: "3:01",
    },
  ];
};

//2nd Reducer
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
  song: songReducer,
  selectedSong: selectedSongReducer,
});

//Now, other files in your project can access to these combined Reducers
