Meteor.methods({
	addMessage : function(roomId, messageText){
		Messages.insert({
			room_id : roomId,
			username : Meteor.user().username,
			messageText : messageText,
			added : new Date()
		})
	}
});

Meteor.publish('messages', function(){
	return Messages.find({}, {sort: {added : -1}})
})