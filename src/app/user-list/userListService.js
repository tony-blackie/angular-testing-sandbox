(function() {
	"use strict";

	angular
		.module('app.users')
		.factory('UserListService', UserService);

	function UserService() {
		var service = {};

		service.users = [];

		angular.extend(service, {
			addUser: addUser
		});

		function addUser(user) {
			service.users.push(
				{
					name: user.name,
					surname: user.surname
				}
			);
		}

		return service;
	}
})();