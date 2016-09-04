describe('userListService', function() {

	beforeEach(module('app'));

	var UserListService;

	beforeEach(
		inject(
			function(
				_UserListService_) {
		UserListService = _UserListService_;
	}));

	it('should contain array of users', function() {
		expect(UserListService.users).toBeDefined();
	});

	it('should add new user', function() {
		var user = {
			name: 'Peter',
			surname: 'Steel'
		};

		UserListService.addUser(user);

		expect(UserListService.users[0].name).toBe('Peter');
		expect(UserListService.users[0].surname).toBe('Steel');
	});
});