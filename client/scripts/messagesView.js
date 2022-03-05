// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.

    //iterate over Messages_.data
    Messages._data.forEach(item => {
    //pass renderMessage function through each message
      MessagesView.renderMessage(item);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //create an HTML
    //render message and assign to HTML
    MessagesView.$chats.append(MessageView.render(message));
    //return HTML
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};