var app = app || {};

// Todo model
// ----------

// Our basic **Todo** model has `title`, `order`, and `completed`
// attributes.
app.Todo = Backbone.Model.extend({
  // Default attributes ensures that each todo created has `title` and
  // `completed` keys.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the completed stage of this todo.
  toggle: function(){
    this.save({
      completed: !this.get('completed')
    });
  }

});




