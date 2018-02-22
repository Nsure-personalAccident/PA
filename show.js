angular.module('app', ['ui.grid', 'ui.grid.selection'])
  .controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    var vm = this;
    vm.gridOptions = {
      enableRowSelection: false,
      enableSelectAll: false,
      showGridFooter:true,
      data: [{S_No:1,Name: "Moni", Sum_Insured: 5000,Plan_Premium:13.00,Optional_Premium:1,Total_Premium:13.00},
             {S_No:2,Name: "Induja", Sum_Insured: 4300,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
             {S_No:3,Name: "Gowthami", Sum_Insured: 2700,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
             {S_No:4,Name: "Priyanga", Sum_Insured: 2900,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
             {S_No:5,Name: "Mythily", Sum_Insured: 3400,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
             {S_No:6,Name: "Swetha", Sum_Insured: 3400,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00}]
    };
    vm.gridOptions.columnDefs = [
        {name:'S_No'},
        { name: 'Name' },
        { name: 'Sum_Insured' },
        {name:'Plan_Premium'},
        {name:'Optional_Premium'},
        {name:'Total_Premium'}
    ];
    vm.gridOptions.multiSelect = false;
    vm.getSelectedRows = function () {
        vm.mySelectedRows = vm.gridApi.selection.getSelectedRows();
    }
    vm.getProductList = function() {
      vm.gridOptions.data = vm.resultSimulatedData;
      vm.mySelectedRows = vm.gridApi.selection.getSelectedRows(); //<--Property undefined error here
      if (vm.mySelectedRows[0]) {
        alert('Selected Row: S_NO: '+ vm.mySelectedRows[0].S_No+',Name: ' + vm.mySelectedRows[0].Name + ',sum_insured: ' + vm.mySelectedRows[0].Sum_Insured +',Plan_premium: '+ vm.mySelectedRows[0].Plan_Premium +',Optinal: '+ vm.mySelectedRows[0].Optional_Premium +',Total: '+ vm.mySelectedRows[0].Total_Premium+ '.');
      } else {
        alert('Select a row first');
      }
      $timeout(function() {
          if (vm.gridApi.selection.selectedRow) {
              vm.gridApi.selection.selectRow(vm.gridOptions.data[0]);
          }
      });
    };
    vm.gridOptions.onRegisterApi = function(gridApi) {
      vm.gridApi = gridApi;
    };
    vm.resultSimulatedData = [{S_No:1,Name: "Moni", Sum_Insured: 5000,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
                               {S_No:2,Name: "Induja", Sum_Insured: 4300,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
                               {S_No:3,Name: "Gowthami", Sum_Insured: 2700,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
                               {S_No:4,Name: "Priyanga", Sum_Insured: 2900,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
                               {S_No:5 ,Name: "Mythily",Sum_Insured: 3400,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00},
                               {S_No:6,Name: "Swetha", Sum_Insured: 3400,Plan_Premium:13.00,Optional_Premium:1.00,Total_Premium:13.00}];
    return vm;
  }]);