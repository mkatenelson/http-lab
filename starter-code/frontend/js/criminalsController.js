// APP
angular
  .module('InfamousCriminalsApp', []);
  .controller('CriminalsController', CriminalsController);


// CONTROLLERS
CriminalsController.$inject = [$http];

function CriminalsController($http) {
  var self = this;

  // stores criminals
  this.all = [];
  // = function addPresident which is where we'll get data from the form
  this.addCriminal = addCriminal;
  this.newCriminal = {};
  this.getCriminals = getCriminals;

  function getCriminals() {
    $http
      .get('http://localhost:3000/criminals')
      .then(function(response) {
        self.all = response.data.criminals;
      });
  }
  getCriminals();

  function addCriminal() {
    $http
      .post('http://localhost:300/criminals', self.newCriminal)
      .then(function(response) {
        getCriminals();
      });
    self.newCriminal = {};
  }
}
