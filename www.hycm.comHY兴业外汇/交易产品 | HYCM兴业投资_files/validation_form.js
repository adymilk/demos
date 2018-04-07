
var app1 = angular.module("myApp", ["ngMessages","countTo", "ngResource", "ngCookies"]); 

app1.config(function($httpProvider) {
	//Enable cross domain calls
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.interceptors.push('aInterceptorService');
});

function intToFloat(num, decPlaces) { return num.toFixed(decPlaces) }

function floatToNum(num) { return parseFloat(num) }

/*Function: Remove error input*/
function click_remove_error(elem){
	if (document.getElementById(elem.id).value.length == 0){
	  setTimeout(
		function (){
		  angular.element(document.getElementById(elem.parentNode.id)).removeClass('has-error');
		}, 1);
	  }
}

/*Get IP*/
var get_country = function () {
  var details;
  (function ($) {

   $.ajax({
		  url: "/cn/client_ip/clients_ip/retrieve.json",
		  type: 'GET',
		  async: false,
		  cache: false,
		  timeout: 30000,
		  error: function(){
			  return true;
		  },
		  success: function(msg){ 
			  if (parseFloat(msg)){
				  details = msg;
				  return false;
			  } else {
				  details = msg;
				  return true;
			  }
		  }
	  });
  })(jQuery);
  return details;
}

//validates a postcode
/*app1.directive('postcodeValidate', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		// scope = the parent scope
		// elem = the element the directive is on
		// attr = a dictionary of attributes on the element
		// ctrl = the controller for ngModel.
		link: function (scope, elem, attr, ctrl) {

			// create the regex obj.
			var regex = /(GIR\s0AA)|(gir\s0aa)|((([A-PR-UWYZa-pr-uwyz][0-9][0-9]?)|(([A-PR-UWYZa-pr-uwyz][A-HK-Ya-hk-y][0-9][0-9]?)|(([A-PR-UWYZa-pr-uwyz][0-9][A-HJKSTUWa-hjkstuw])|([A-PR-UWYZa-pr-uwyz][A-HK-Ya-hk-y][0-9][ABEHMNPRVWXYabehmnprvwxy]))))\s{0,1}[0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2})/;

			// add a parser that will process each time the value is 
			// parsed into the model when the user updates it.
			ctrl.$parsers.unshift(function (value) {
				// test and set the validity after update.
				var valid = regex.test(value);
				ctrl.$setValidity('postcodeValidate', valid);

				// if it's valid, return the value to the model, 
				// otherwise return undefined.
				return valid ? value : undefined;
			});

			// add a formatter that will process each time the value 
			// is updated on the DOM element.
			ctrl.$formatters.unshift(function (value) {
				// validate.
				ctrl.$setValidity('postcodeValidate', regex.test(value));

				// return the value or nothing will be written to the DOM.
				return value;
			});
		}
	};
});*/
/*validation*/
app1.directive('showErrors', function() {
	return {
	  restrict: 'A',
	  require: '^form',
	  link: function (scope, el, attrs, formCtrl) {
		// find the text box element, which has the 'name' attribute
		var inputEl   = el[0].querySelector("[name]");
		// convert the native text box element to an angular element
		var inputNgEl = angular.element(inputEl);
		// get the name on the text box
		var inputName = inputNgEl.attr('name');
		
		// only apply the has-error class after the user leaves the text box
		inputNgEl.bind('blur', function() {
		  el.toggleClass('has-error', formCtrl[inputName].$invalid);
		})
	  }
	}
  });


var Loading = function () {
	angular.element(document.getElementById("load_anim")).removeClass("hidden");
	angular.element(document.getElementById("load_msg")).removeClass("hidden");
	angular.element(document.getElementById("load_anim")).addClass("glyphicon glyphicon-refresh glyphicon-refresh-animate show pull-left");
	angular.element(document.getElementById("text_btn")).addClass("hidden");
  };

var RemLoading = function () {
	angular.element(document.getElementById("load_anim")).addClass("hidden");
	angular.element(document.getElementById("load_msg")).addClass("hidden");
	angular.element(document.getElementById("text_btn")).removeClass("hidden");
	
  };

(function ($) {
	showBtnLoading = function (ele) {
		var ele = $(ele);
		
		ele.find("#load_anim").removeClass("hidden");
		ele.find("#load_msg").removeClass("hidden");
		ele.find("#load_anim").addClass("glyphicon glyphicon-refresh glyphicon-refresh-animate show pull-left");
		ele.find("#text_btn").addClass("hidden");
	}
	hideBtnLoading = function (ele) {
		var ele = $(ele);
		
		ele.find("#load_anim").addClass("hidden");
		ele.find("#load_msg").addClass("hidden");
		ele.find("#text_btn").removeClass("hidden");
	}
})(jQuery);

/*Password*/
  var compareTo = function() {
	return {
	  require: "ngModel",
	  scope: {
		otherModelValue: "=compareTo"
	  },
	  link: function(scope, element, attributes, ngModel) {

		ngModel.$validators.compareTo = function(modelValue) {
		  return modelValue == scope.otherModelValue;
		};

		scope.$watch("otherModelValue", function() {
		  ngModel.$validate();
		});
	  }
	};
  };

  app1.directive("compareTo", compareTo);

/*Email Validation*/
app1.directive('validateEmail', function() {
  var EMAIL_REGEXP = /^[_a-zA-Z0-9]+([\.-][_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;

  return {
	require: 'ngModel',
	restrict: '',
	link: function(scope, elm, attrs, ctrl) {
	  // only apply the validator if ngModel is present and Angular has added the email validator
	  if (ctrl && ctrl.$validators.email) {

		// this will overwrite the default Angular email validator
		ctrl.$validators.email = function(modelValue) {
		  return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
		};
	  }
	}
  };
});

/*Date - Calendar*/
var dt = new Date();
dt.setFullYear(new Date().getFullYear()-18);
var yrRange = 1920+ ":" + dt.getFullYear() ;

app1.directive('jqdatepicker', function () {
	return {
		restrict: 'A',
		require: 'ngModel',
		 link: function (scope, element, attrs, ngModelCtrl) {
			element.datepicker({
				// showOn: "button",
				// buttonImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzPeJGH5Hkw3-EZg9nlF65qTzQWrjFwwU8FLfUMUJguJC0oQ8",
				// buttonImageOnly: true,
				// buttonText: "Select date",
//              startingDay: sd,
			   dateFormat: 'dd/mm/yy',
				yearRange: yrRange ,
				maxDate: dt,
				changeMonth: true,
				changeYear: true,
				onSelect: function (date) {

				   scope.$apply(function () {
							ngModelCtrl.$setViewValue(date);
						}); 
					// console.log("Date 2:"+scope.date2);
				
					// console.log("Date 3:"+scope.date3);
				}
			});
		}
	};
});

/*see if file is submited*/
app1.directive('validFile',function(){
  return {
	require:'ngModel',
	link:function(scope,el,attrs,ngModel){
	  //change event is fired when file is selected
	  el.bind('change',function(){
		scope.$apply(function(){
		  ngModel.$setViewValue(el.val());
		  ngModel.$render();
		})
	  })
	}
  }
});

/*Directive: Numbers only input*/
app1.directive('numbersOnly', function () {

	return {
	 require: 'ngModel',
	 link: function(scope, element, attrs, modelCtrl) {
	   modelCtrl.$parsers.push(function (inputValue) {
		   // this next if is necessary for when using ng-required on your input. 
		   // In such cases, when a letter is typed first, this parser will be called
		   // again, and the 2nd time, the value will be undefined
		   if (inputValue == undefined) return '' 
		   var transformedInput = inputValue.replace(/[^0-9]/g, ''); 
		   if (transformedInput!=inputValue) {
			  modelCtrl.$setViewValue(transformedInput);
			  modelCtrl.$render();
		   }         

		   return transformedInput;         
	   });
	 }
   };
});

