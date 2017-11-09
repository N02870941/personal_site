app.controller('clusterController', function($scope) {


  $(function () {
		var options = {
			owner: 'n02870941',
			repo: 'personal_website'
		};
		$('#readme').readme(options);
	});

});
