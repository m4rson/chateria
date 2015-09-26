Meteor.publish('room', function(){
	return Rooms.findOne({name: this.name});
})