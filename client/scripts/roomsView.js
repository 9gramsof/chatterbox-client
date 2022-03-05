// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var roomKeys = Object.keys(Rooms._data);
    // var roomValues = Object.values(Rooms._data);
    roomKeys.forEach(key => {
      RoomsView.renderRoom(key);
    });
  },

  singlerender: _.template(`
    <div class="room">
      <div class="roomname">
      <%= roomname %>
      </div>
    </div>
  `),

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var html = '<option value="' + roomname + '">' + roomname + '</option>';
    RoomsView.$select.append(html);

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
/* <div class="username">
<%= username %>
</div>
<div class="text">
<%= text %>
</div> */