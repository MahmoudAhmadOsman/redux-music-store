//1. create action, 2. then, create reducers

//1. Actions ======Action creator

//1st action
export const selectSong = (song) => {
  //Return an action
  //Rule of redux: 1. must have 1: type 2: payload (optional)
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
