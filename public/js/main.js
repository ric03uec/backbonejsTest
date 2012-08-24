//javascript for the main page//
var initView = function(){
  //initialize a model
  var Friend = Backbone.Model.extend({
    name : null,
    initialize : function(){
      this.name = null;
    }
  });

  //initialize a collection for that model
  var Friends = Backbone.Collection.extend({
    model : Friend,
    //contains the options for this collection
    initialize : function(options){
      //trigger an action when a model is added to the collection
      this.on("add", options.view.addFriendLi);
    }
  });

  //initialize the View for the button
  var Appview = Backbone.View.extend({
    el : $('#add-friends'),
    initialize : function(){
      this.friends = new Friends(null, {view : this});
    },
    events : {
      //add the click handler on the button to trigger an action
      'click' : 'showPrompt'
    },
    showPrompt : function(){
      //get the name of new friend
      var friendName = prompt('who is your friend');
      
      //create a 'Friend' object from the name
      var newFriend = new Friend({name : friendName});

      //add the new friend to collection
      this.friends.add(newFriend);
    },

    //add the newly added model to the list 
    addFriendLi : function(model){
      $('#friends-list').append('<li>' + model.get('name') + '</li>');
    }
  });
  
  //initialize the View
  var appView = new Appview();
};

$(function(){
  initView();
});
