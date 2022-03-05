// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  retrieve: function(data) {
    data.forEach(item => {
      if (Rooms._data[item.roomname] === null) {
        Rooms._data[item.roomname] = 'no room';
      }
      if (Rooms._data[item.roomname] === undefined) {
        Rooms._data[item.roomname] = item.roomname;
      }
    });
  }

};

