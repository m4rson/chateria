Template.credentialForms.events({
	'click .registerSubmit' : function(){
         var username = $('.registerUsername').val();
         var email = $('.registerEmail').val();
         var password = $('.registerPassword').val();

         if(username === '' || email === '' || password === '')
         {
            alert('Please fill in all fields properly!');
         }
         else
         {
         	if(password.length < 6)
         	{
         		alert('Password must have at least 6 characters!');
         	}
         	else
         	{
         		Accounts.createUser({
         			username : username,
         			email : email,
         			password : password,
         			joined : new Date()
         		});

         		$('.registerUsername').val('');
         		$('.registerEmail').val('');
         		$('.registerPassword').val('');
         	}
         }
	},

	'click .loginSubmit' : function(){
        var username = $('.loginUsername').val();
        var password = $('.loginPassword').val();

        if(username === '' || password === '')
        {
        	alert('Please fill in all fields properly!');
        }
        else
        {
        	Meteor.loginWithPassword(username, password);
        	$('.loginUsername').val('');
        	$('.loginPassword').val('');
        }
	}

});
