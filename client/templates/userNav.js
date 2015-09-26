Template.userNav.events({
	'click .logoutButton' : function(){
		if(confirm('Are you sure?'))
		{
			Meteor.logout();
			Router.go('/');
		}
	}
})
