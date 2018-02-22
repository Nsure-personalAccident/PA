var myapp = angular.module('index', ['ngGrid']);
myapp.controller('ctrl', function($scope) {
    $scope.Data = [{Payment_Mode: "001", Card_Type:"HBHSds" , Card_Holder_Name: "Induja" , Card_Holder_Contact:"9761438241" , Card_Serial : "097654" , Card_Expiry_Month :"july"},
                   {Payment_Mode: "002", Card_Type:"HBHSds" , Card_Holder_Name: "Induja" , Card_Holder_Contact:"9761438241" , Card_Serial : "097654" , Card_Expiry_Month :"july"},
                   ];
    $scope.gridApp = { data: 'Data' };
});

