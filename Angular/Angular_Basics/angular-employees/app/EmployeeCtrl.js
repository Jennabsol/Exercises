//Create initial module
var app = angular.module("EmployeeMgmt", []);

//Create controller
app.controller("EmployeeCtrl", function ($scope, $http) {

    $scope.title = "Employee Listing"
    // empty object to hold new employee
    $scope.newEmployee = {}


    // call to firebase to get the database of employees and store it in the $scope.employees array
    $http
        .get("https://employees-59f8e.firebaseio.com/employees/.json")
        .then(function (response) {
            console.log(response)
            $scope.employees = response.data

        })
    // create a new employee object then send it up to firebase database and then get the updated database back so dom will be updated

    $scope.addNewEmployee = function () {
        $http.post("https://employees-59f8e.firebaseio.com/employees/.json", {
            "firstName": $scope.newEmployee.firstName,
            "lastName": $scope.newEmployee.lastName,
            "employmentStart": Date.now(),
            "employmentEnd": 0

        }).then(function () {
            displayEmployees()
            $scope.newEmployee.firstName = ""
            $scope.newEmployee.lastName = ""
        })
    }

    //Created a function to store the display of employees
    const displayEmployees = function () {
        $http
            .get("https://employees-59f8e.firebaseio.com/employees/.json")
            .then(function (response) {
                $scope.employees = response.data
            })
    }
    // function to handle the firing of an employee by adding a date in milliseconds
    // to the employee object of when the fire button is clicked in the dom, then send that
    // updated empoloyee object to the firebase database. Then call to get the updated database
    // to keep the dom list of employees updated

    $scope.fireEmployee = function (employee, key) {

        //Addes the end date to employmentEnd in object
        employee.employmentEnd = Date.now()

        //Then will update the employmentEnd date in firebase
        //Argument targets the current employee and the assigned ${key} in firebase
        $http
            .put(`https://employees-59f8e.firebaseio.com/employees/${key}/.json`, employee)
            .then(function () {
                displayEmployees()
            })
    }
    // call to firebase to delete the matching employee object from the database, then a call to get the updated database to keep the dom list of employees updated
    $scope.deleteEmployee = function (employee, key) {
        $http
            .delete(`https://employees-59f8e.firebaseio.com/employees/${key}/.json`, employee)
            .then(function () {
                displayEmployees()
            })
    }

});