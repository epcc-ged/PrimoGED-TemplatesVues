(function () {
	"use strict";

	var app = angular.module('viewCustom', ['angularLoad']);

	/****************************************************************************************************/

		/*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

	   /*var app = angular.module('centralCustom', ['angularLoad']);*/

	/****************************************************************************************************/
 	app.component('prmRequestServicesAfter', {
		bindings: { parentCtrl: '<' },
		controller: ['$scope',function($scope) {
			let _this = this;
			this.$onInit = function() {
				let removeWatcher = $scope.$watch(function() {return _this.parentCtrl.services.serviceinfo}, function(serviceinfo) {
					if (serviceinfo && serviceinfo.length > 0){
						serviceinfo.splice(serviceinfo.findIndex(function(service) {return service.type === 'AlmaPurchaseRequest'}), 1);
						removeWatcher();
					}
				});
			}
		}],
		template: ''
	});

	app.component('almaHowovpAfter', {
		bindings: { parentCtrl: '<' },
		controller: ['$scope',function($scope) {
			let _this = this;
			this.$onInit = function() {
				let removeWatcher = $scope.$watch(function() {return _this.parentCtrl.services.serviceinfo}, function(serviceinfo) {
					if (serviceinfo && serviceinfo.length > 0){
						serviceinfo.splice(serviceinfo.findIndex(function(service) {return service.type === 'AlmaPurchaseRequest'}), 1);
						removeWatcher();
					}
				});
			}
		}],
		template: ''
	}); 

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

// AlmaRequest  
function moveRequestSectionToBeBelowLocationsSection(theElement) {  
    $(theElement).closest("prm-opac").css("display", "flex");  
    $(theElement).closest("prm-opac").css("flex-direction", "column");  
    $(theElement).closest("div[layout='column']").css("order","1");  
      
  
    $("md-divider[class='inner-divider md-primoExplore-theme']").remove();  
      
    $(theElement).closest("prm-service-button[method='GET']").css("height","60px");  
      
    $(theElement).closest("button").removeClass();  
    $(theElement).closest("button").addClass("btnStyle");  
      
    $(theElement).closest("button").on("click", function() {  
        $(theElement).closest("button").css("display","none")  
    });  
}

// nui.items.back  
function bringBackRequestItem(theElement) {  
    $(theElement).closest("button").on("click", function() {  
        var checkExistenceOfElement = setInterval(function() {  
            if ($("button[class='btnStyle']").length > 0) {  
                clearInterval(checkExistenceOfElement);  
                $("button[class='btnStyle']").css("display","block");  
            }  
        }, 50); // check every 50ms   
    });  
}    

// AlmaItemRequest  
function giveStyleToRequestItemButtonInsideTheList(theElement) {  
    $(theElement).closest("button").removeClass();  
    $(theElement).closest("button").addClass("btnStyleInsideList");  
}

