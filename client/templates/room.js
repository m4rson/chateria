Meteor.subscribe('room');

Template.room.events({
	'click .leaveRoomButton' : function(){
		Router.go('/');
	},

	'dblclick .exitRoom' : function(){
		Router.go('/');
	}
});

Template.room.helpers({
	isOwner: function(){
		return this.owner === Meteor.userId();
	}
})

