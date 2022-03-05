// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  retrieve: function(data) {
    data.forEach(item => {
      var msgobj = {};

      msgobj['username'] = item.username;
      msgobj['roomname'] = item.roomname;
      msgobj['text'] = item.text;
      Messages._data.push(msgobj);
    });
  }

  // interact:
};