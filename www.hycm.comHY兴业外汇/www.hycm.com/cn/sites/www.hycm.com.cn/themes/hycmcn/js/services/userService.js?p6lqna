app1.factory('aInterceptorService', ['$q', '$window', function ($q, $window){
	var responseError = function (rejection) {
		if (rejection.status === 403) {
			$window.localStorage && $window.localStorage.setItem('logIn', 'out');
			var logIn = $window.localStorage && $window.localStorage.getItem('logIn');
		}
		return $q.reject(rejection);
	};
	return {
		responseError: responseError
	};
}]);

app1.service('AuthUser', function($http, $window) {
	$http({
		url: vars.api_uri_prefix + '/clients/getClientStatus',
		method: "POST",
		withCredentials: true,
		transformResponse: undefined,
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	})
	.then(function successCallback(responseStatus , status) 
	{ 
		if(responseStatus.status != 403){		
		$window.localStorage && $window.localStorage.setItem('logIn', 'truein');	
		}else{
			$window.localStorage && $window.localStorage.setItem('logIn', 'out');
		}
	}, 
	function errorCallback(response) {
		//localStorage.clear();
		localStorage.removeItem("logIn");
		$window.localStorage && $window.localStorage.setItem('logIn', 'out');	

	});
	if ($window.localStorage['logIn'] === undefined || $window.localStorage['logIn'] === null || $window.localStorage['logIn'] === 0)
	{
		$window.localStorage && $window.localStorage.setItem('logIn', 'out');		
	};
	var logIn = $window.localStorage && $window.localStorage.getItem('logIn');
	return {
		login: function() {
			$window.localStorage && $window.localStorage.setItem('logIn', 'truein');
			var logIn = $window.localStorage && $window.localStorage.getItem('logIn');
		},
		loginDemo: function() {
			$window.localStorage && $window.localStorage.setItem('logIn', 'demotruein');
			var logIn = $window.localStorage && $window.localStorage.getItem('logIn');
		},
		logout: function() {
			$window.localStorage && $window.localStorage.setItem('logIn', 'out');
			var logIn = $window.localStorage && $window.localStorage.getItem('logIn');
			
		},
		isAuthenticated: function() {  
			$window.localStorage && $window.localStorage.getItem('logIn');
			return logIn;

		}
	};
	
});

app1.service('AuthUserDemo', function($http, $window) {
	
	var logInDemo = $window.localStorage && $window.localStorage.getItem('logInDemo');
	return {
		login: function() {
			$window.localStorage && $window.localStorage.setItem('logInDemo', 'truein');
			var logInDemo = $window.localStorage && $window.localStorage.getItem('logInDemo');
		},
		loginDemo: function() {
			$window.localStorage && $window.localStorage.setItem('logInDemo', 'demotruein');
			var logInDemo = $window.localStorage && $window.localStorage.getItem('logInDemo');
		},
		logout: function() {
			$window.localStorage && $window.localStorage.setItem('logInDemo', 'out');
			var logInDemo = $window.localStorage && $window.localStorage.getItem('logInDemo');
			
		},
		isAuthenticated: function() {  
			$window.localStorage && $window.localStorage.getItem('logInDemo');
			return logInDemo;

		}
	};
	
});
app1.service('AuthUserYahui', function($http, $window) {
	
	var logInYahui = $window.localStorage && $window.localStorage.getItem('logInYahui');
	return {
		login: function() {
			$window.localStorage && $window.localStorage.setItem('logInYahui', 'truein');
			var logInYahui = $window.localStorage && $window.localStorage.getItem('logInYahui');
		},
		logout: function() {
			$window.localStorage && $window.localStorage.setItem('logInYahui', 'out');
			var logInYahui = $window.localStorage && $window.localStorage.getItem('logInYahui');
			
		},
		isAuthenticated: function() {  
			$window.localStorage && $window.localStorage.getItem('logInYahui');
			return logInYahui;

		}
	};
	
});
app1.factory("UserStatusService", function($window, $rootScope) {
	angular.element($window).on('storage', function(event) {
		if (event.key === 'userstatus') {
			$rootScope.$apply();
		}
	});
	return {
		setData: function(uStatus) {
			$window.localStorage && $window.localStorage.setItem('cnuserstatus', uStatus);
			return this;
		},
		getData: function() {
			jsonParse = JSON.parse($window.localStorage && $window.localStorage.getItem('cnuserstatus'));
     		return jsonParse;
		}
	};
});

app1.factory("UserService", function($window, $rootScope) {
	angular.element($window).on('storage', function(event) {
		if (event.key === 'usrloggedinfo') {
			$rootScope.$apply();
		}
	});
	return {
		setData: function(user) {
			$window.localStorage && $window.localStorage.setItem('usrloggedinfo', user);
			return this;

		},
		getData: function() {
			return $window.localStorage && $window.localStorage.getItem('usrloggedinfo');

		}
	};
});

app1.factory("AccountService", function($window, $rootScope) {
	angular.element($window).on('storage', function(event) {
		if (event.key === 'useraccinfo') {
			$rootScope.$apply();
		}
	});
	return {
		setData: function(accData) {
			$window.localStorage && $window.localStorage.setItem('useraccinfo', accData);
			return this;

		},
		getData: function() {
			return $window.localStorage && $window.localStorage.getItem('useraccinfo');

		}
	};
});
app1.factory("UserLService", function($window, $rootScope) {
	angular.element($window).on('storage', function(event) {
		if (event.key === 'userlanding') {
			$rootScope.$apply();
		}
	});
	return {
		setData: function(ulp) {
			$window.localStorage && $window.localStorage.setItem('userlanding', ulp);
			return this;

		},
		getData: function() {
		return $window.localStorage && $window.localStorage.getItem('userlanding');

		}
	};
});