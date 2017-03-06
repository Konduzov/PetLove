/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
        /* etc… routes to other pages… */
        // Blog
        .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
        //  Registration
        .when("/registration", {templateUrl: "partials/registration.html", controller: "PageCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $route, $location, $http) {
    console.log("Page Controller reporting for duty!");

    $scope.showEditSitterForm = false;
    $scope.showEditOwnerForm = false;
    $scope.showEditBookingForm = false;

    $http.get('/sitters').then(function (response) {
        $scope.sitters = response.data;
    });

    $http.get('/owners').then(function (response) {
        $scope.owners = response.data;
    });

    $http.get('/bookings').then(function (response) {
        $scope.bookings = response.data;
    });

    $scope.register = function (userType) {
        if(userType == 'sitter') {
            $scope.registerSitter();
        } else {
            $scope.registerOwner();
        }
    }

    $scope.registerSitter = function () {
        $http.post("/sitters", $scope.user)
            .then(
                function (response) {
                    console.log("User saved.");
                    $scope.user = {};
                },
                function(errResponse){
                    console.error("Error while creating User");
                }
            );
    }

    $scope.registerOwner = function () {
        $http.post("/owners", $scope.user)
            .then(
                function (response) {
                    console.log("User saved.");
                    $scope.user = {};
                },
                function(errResponse){
                    console.error("Error while creating User");
                }
            );
    }

    $scope.deleteSitter = function (id) {
        $http.delete("/sitters/"+id)
            .then(
                function (response) {
                    console.log("User deleted.");
                    $route.reload();
                },
                function(errResponse){
                    console.error('Error while deleting user');
                }
            );
    }

    $scope.deleteOwner = function (id) {
        $http.delete("/owners/"+id)
            .then(
                function (response) {
                    console.log("User deleted.");
                    $route.reload();
                },
                function(errResponse){
                    console.error('Error while deleting user');
                }
            );
    }

    $scope.deleteBooking = function (id) {
        $http.delete("/bookings/"+id)
            .then(
                function (response) {
                    console.log("Booking deleted.");
                    $route.reload();
                },
                function(errResponse){
                    console.error('Error while deleting booking');
                }
            );
    }


    $scope.showEditSitterFormFunc = function (currentSitter) {
        $scope.editSitter = {};
        $scope.editSitter.id = currentSitter.id;
        $scope.editSitter.name = currentSitter.name;
        $scope.editSitter.city = currentSitter.city;
        $scope.showEditSitterForm = true;
    }

    $scope.editSitterFunc = function (user, id) {
        $http.put("/sitters/"+id, user)
            .then(
                function (response) {
                    console.log("User updated.");
                    $scope.showEditSitterForm = false;
                    $route.reload();
                },
                function(errResponse){
                    console.error('Error while updating User');
                }
            );
    }

    $scope.showEditOwnerFormFunc = function (currentOwner) {
        $scope.editOwner = {};
        $scope.editOwner.id = currentOwner.id;
        $scope.editOwner.name = currentOwner.name;
        $scope.editOwner.city = currentOwner.city;
        $scope.showEditOwnerForm = true;
    }

    $scope.editOwnerFunc = function (user, id) {
        $http.put("/owners/"+id, user)
            .then(
                function (response) {
                    console.log("User updated.");
                    $scope.showEditOwnerForm = false;
                    $route.reload();
                },
                function(errResponse){
                    console.error('Error while updating User');
                }
            );
    }

    $scope.showEditBookingFormFunc = function (currentBooking) {
        $scope.editBooking = {"sitter": {}, "owner": {}};
        $scope.editBooking.id = currentBooking.id;
        $scope.editBooking.sitter.id = currentBooking.sitter.id;
        $scope.editBooking.owner.id = currentBooking.owner.id;
        $scope.editBooking.date = currentBooking.date;
        $scope.showEditBookingForm = true;
    }

    $scope.editBookingFunc = function (booking, id) {
        $http.put("/bookings/"+id, booking)
            .then(
                function (response) {
                    console.log(booking);
                    console.log("Booking updated.");
                    $scope.showEditBookingForm = false;
                    $route.reload();
                },
                function(errResponse){
                    console.error('Error while updating booking');
                }
            );
    }


    console.log("Page Controller reporting for duty!!!");
    /*// Activates the Carousel
     $('.carousel').carousel({
     interval: 5000
     });

     // Activates Tooltips for Social Links
     $('.tooltip-social').tooltip({
     selector: "a[data-toggle=tooltip]"
     })

     */
});

app.filter('cityFilter', function () {
    return function (x, citySearch) {
        if (x) {
            var filteredSitters = [];
            var sitter;
            for (sitter in x) {
                if (!citySearch || x[sitter].city.toLowerCase().indexOf(citySearch.toLowerCase()) !== -1) {
                    filteredSitters.push(x[sitter]);
                }
            }
            return filteredSitters;
        }
    }
})
    app.filter('sitterFilter', function () {
        return function (x, sitterSearch) {
            if (x) {
                var filteredBookings= [];
                var booking;
                for (booking in x) {
                    if (!sitterSearch || x[booking].sitter.name.toLowerCase().indexOf(sitterSearch.toLowerCase()) !== -1) {
                        filteredBookings.push(x[booking]);
                    }
                }
                return filteredBookings;
            }
        }
    })
        app.filter('ownerFilter', function () {
            return function (x, ownerSearch) {
                if (x) {
                    var filteredBookings = [];
                    var booking;
                    for (booking in x) {
                        if (!ownerSearch || x[booking].owner.name.toLowerCase().indexOf(ownerSearch.toLowerCase()) !== -1) {
                            filteredBookings.push(x[booking]);
                        }
                    }
                    return filteredBookings;
                }
            }

        })
