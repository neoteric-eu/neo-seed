define(['apps/demo/components/chat/module'], function (module, io) {

	'use strict';

	module.registerFactory('ChatApi', function ($q, $rootScope, UserDemo, $http) {
		var dfd = $q.defer();
		var _user;
		var ChatSrv = {
			initialized: dfd.promise,
			users: [],
			messages: [],
			statuses: ['Online', 'Busy', 'Away', 'Log Off'],
			status: 'Online',
			setUser: function (user) {
				if (ChatSrv.users.indexOf(_user) != -1)
					ChatSrv.users.splice(ChatSrv.users.indexOf(_user), 1);
				_user = user;
				ChatSrv.users.push(_user);
			},
			sendMessage: function (text) {
				var message = {
					user: _user,
					body: text,
					date: new Date()
				};
				this.messages.push(message);
			}
		};


		$http.get('apps/demo/api/chat.json').then(function (res) {
			ChatSrv.messages = res.data.messages;
			ChatSrv.users = res.data.users;
			dfd.resolve();
		});

		ChatSrv.initialized.then(function () {

			UserDemo.initialized.then(function () {
				ChatSrv.setUser({
					username: UserDemo.username,
					picture: UserDemo.picture,
					status: ChatSrv.status
				});
			});

			$rootScope.$watch(function () {
				return UserDemo.username
			}, function (name, oldName) {
				if (name != oldName) {
					ChatSrv.setUser({
						username: UserDemo.username,
						picture: UserDemo.picture,
						status: ChatSrv.status
					});
				}
			});
		});


		return ChatSrv;

	});
});
