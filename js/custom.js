(function () {
	"use strict";

	var app = angular.module('viewCustom', ['angularLoad']);

	/****************************************************************************************************/

		/*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

	   /*var app = angular.module('centralCustom', ['angularLoad']);*/

	/****************************************************************************************************/
  

	app.component('prmSearchResultListAfter', {
		bindings: {parentCtrl: '<'},
		controller: 'prmSearchResultListAfterController',
	});

	app.controller('prmSearchResultListAfterController', ['$scope', function ($scope) {
		var element = document.querySelector('prm-explore-footer-after .site-footer');

		if (element !== null) {
			document.querySelector('prm-explore-footer-after .site-footer').classList.add("hide"); // on cache
		}
	}]);

	app.component('prmExploreFooterAfter', {
		templateUrl:'/discovery/custom/33CCP_INST-CCP/html/footer/footer_fr.html',
	});

	console.log("::Start loading JQUERY::");
	var jQueryScript = document.createElement("script");
	jQueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
	jQueryScript.defer = "defer";
	document.getElementsByTagName("head")[0].appendChild(jQueryScript);

	jQueryScript.onload = function () {
		$(document).ready(function () {
			loadLibraries();
		});
	};

})();

function loadLibraries() {

	var popperScript = document.createElement("script");
	popperScript.defer = "defer";
	popperScript.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
	document.getElementsByTagName("head")[0].appendChild(popperScript);

	var bootstrapScript = document.createElement("script");
	bootstrapScript.defer = "defer";
	bootstrapScript.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
	document.getElementsByTagName("head")[0].appendChild(bootstrapScript);

	var bootstrapCSS = document.createElement('link');
	bootstrapCSS.type = 'text/css';
	bootstrapCSS.rel = 'stylesheet';
	bootstrapCSS.href = '/discovery/custom/33CCP_INST-CCP/css/bootstrap.min.css';
	document.getElementsByTagName("head")[0].appendChild(bootstrapCSS);

	var myCustomCSS = document.createElement('link');
	bootstrapCSS.type = 'text/css';
	bootstrapCSS.rel = 'stylesheet';
	bootstrapCSS.href = '/discovery/custom/33CCP_INST-CCP/css/custom33CCP.css';
	document.getElementsByTagName("head")[0].appendChild(myCustomCSS);
}




