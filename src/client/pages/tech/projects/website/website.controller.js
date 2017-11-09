app.controller('websiteController', function($scope) {


  $(function () {
		var options = {
			owner: 'n02870941',
			repo: 'personal_site'
		};
		$('#readme').readme(options);
	});

});
