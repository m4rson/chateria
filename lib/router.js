Router.configure({
	layoutTemplate : 'ApplicationLayout'
});

Router.route('/', function(){
	if(Meteor.userId())
	{
		this.render('rooms');
	}
	else
	{
		this.render('credentialForms');
	}
});

Router.route(':name', function(){
	if(Meteor.userId())
	{
		this.render('room', {
		 data : function(){
			return Rooms.findOne({name: this.params.name});
		}
	  });
	}
	else{ this.render('credentialForms');}

});



