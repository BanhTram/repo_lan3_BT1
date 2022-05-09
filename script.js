var app = angular.module("myApp", []);
app.controller("myController", function($scope){
    $scope.hocSinh = [
        {hoTen: "Nam", tuoi: 16, lop: "Lop 10A"},
        {hoTen: "Bede", tuoi: 17, lop: "Lop 10A"},
        {hoTen: "Hoho", tuoi: 17, lop: "Lop 10B"},
        {hoTen: "Kaka", tuoi: 18, lop: "Lop 11A"},
        {hoTen: "Benben", tuoi: 16, lop: "Lop 11B"},
        {hoTen: "Lunu", tuoi: 18, lop: "Lop 12A"},
        {hoTen: "Lpaa", tuoi: 18, lop: "Lop 12B"},
    ];
    $scope.khoi = [
        {name: "Khoi 10", lop: [{name: "Lop 10A"}, {name: "Lop 10B"}]},
        {name: "Khoi 11", lop: [{name: "Lop 11A"}, {name: "Lop 11B"}]},
        {name: "Khoi 12", lop: [{name: "Lop 12A"}, {name: "Lop 12B"}]}
    ];
    $scope.change_Main_Add = true;
    $scope.change_Main_Edit = false;
    $scope.edit = function(hs){
        $scope.change_Main_Edit = true;
        $scope.hs = hs;
    };
    $scope.saveEdit = function(){
        $scope.change_Main_Edit = false;
    };
    $scope.add = function(){
        $scope.change_Main_Add = false;
    };
    $scope.saveAdd = function(hoTen, tuoi, lop){
        tuoi = new Date().getFullYear() - tuoi.getFullYear();
        var x = {hoTen: hoTen, tuoi: tuoi, lop: lop};
        $scope.hocSinh.push(x);
        $scope.change_Main_Add = true;
       
    };
    $scope.delete = function(hs){
        var index = $scope.hocSinh.indexOf(hs);
		$scope.hocSinh.splice(index, 1);
    }; 
    $scope.data = {};
    $scope.inputData = {};
    $scope.applySearch = function(){
        for(prop in $scope.inputData){
            $scope.data[prop] = $scope.inputData[prop];
        }
    };
});