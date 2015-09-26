Meteor.subscribe('messages');

Template.messages.events({
	'click .sendMessage, keyup .messageText' : function(e){

		if((e.type === 'click') || (e.keyCode === 13))
		{
		   var messageText = $('.messageText').val();
		   var roomId = Session.get('roomId');
		   	if(messageText === '')
		    {
			  alert('Message cannot be empty!');
		     }
		    else
		     {
			   Meteor.call('addMessage', roomId, messageText);
			   $('.messageText').val('');
		    }
		}
			
	}
});

Template.messages.helpers({
	messages : function(){
		return Messages.find({room_id: Session.get('roomId')}, {sort: {added: -1}});
	}

});