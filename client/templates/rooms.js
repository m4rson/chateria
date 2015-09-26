Meteor.subscribe('rooms');

Template.rooms.events({
	'click .addRoomSubmit' : function(){
		var name = $('.newRoom').val();
		if(name === '')
		{
			alert('Room name cannot be empty!');
		}
		else
		{
			Meteor.call('addNewRoom', name);

			$('.newRoom').val('');
		}
	},

	'click .roomLink' : function(){
		Session.set('roomId', this._id);
	},

	'click .deleteRoom' : function(userId, doc){
		Rooms.remove(this._id);
	}
});

Template.rooms.helpers({
	rooms : function(){
		return Rooms.find();
	}

});

