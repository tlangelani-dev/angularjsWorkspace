var imsApp = angular.module('imsApp', []);

imsApp.controller('AppController', function($scope) {

    $scope.DBs = [
        {id: '1', name: 'DB1'},
        {id: '2', name: 'DB2'},
        {id: '3', name: 'DB3'},
        {id: '4', name: 'DB4'}
    ];

    // defaults
    $scope.form_data = {
        app_name    : 'IMS Angularjs App',
        client      : 'Truworths',
        db          : '2'
    };

    $scope.send_data = function() {
        console.log( $scope.form_data );
    };
});
