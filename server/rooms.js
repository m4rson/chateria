Meteor.methods({
	addNewRoom : function(name){
		Rooms.insert({
			owner : Meteor.user().username,
			name : name,
			added : new Date()
		})
	}
});


Meteor.publish('rooms', function(){
	return Rooms.find();
});
