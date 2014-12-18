angular.module('app')


.controller('MainCtrl', function($scope) {

	$scope.gridsterOpts = {
		margins: [1, 1],
		columns: 4,

		outerMargin: false,
		pushing: false,
        defaultSizeX: 1, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default width of a gridster item, if not specifed
		floating: false,
		swapping : true,
		draggable: {
			enabled: true
		},
		resizable: {
			enabled: false,
		}
	};

	// these map directly to gridsterItem options
	$scope.standardItems = [{
		name: "a"
	}, {
		name: "b"
	}, {
		name: "c"
	}, {
		name: "d"
	}, {
		name: "e"
	}, {
		name: "f"
	}, {
		name: "g"
	}, {
		name: "h"
	}, {
		name: "i"
	}, {
		name: "j"
	}, {
		name: "k"
	}];

	$scope.$watch('standardItems', function(items){
		console.log(items);
	}, true);
});
