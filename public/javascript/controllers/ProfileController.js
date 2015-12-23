(function() {
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);

	function ProfileController(UserFactory,HomeFactory, $state, $stateParams, $animate) {
		console.log('Profile Controller');
		$animate.enabled(true);
		var vm = this;
		vm.title = 'Profile';
		vm.status = UserFactory.status;
		vm.counter = 0;
		vm.user = {};
		vm.favorites = [];
		vm.Audio = [];
		vm.red;
		vm.green;
		vm.blue;
		vm.rgbColor;
		vm.noColorMsg = true;
		vm.isBio = false;
		vm.isIns = true;
		vm.isEve = true;
		vm.isStat = true;
		// vm.isAch = true;


		vm.showBio = function() {
			vm.isBio = false;
			vm.isIns = true;
			vm.isEve = true;
			vm.isStat = true;
			// vm.isAch = true;
		}
		vm.showIns = function() {
			vm.isIns = false;
			vm.isBio = true;
			vm.isEve = true;
			vm.isStat = true;
			// vm.isAch = true;
		}
		vm.showEve = function() {
			vm.isBio = true;
			vm.isIns = true;
			vm.isEve = false;
			vm.isStat = true;
			// vm.isAch = true;
		}
		vm.showStat = function() {
			vm.isBio = true;
			vm.isIns = true;
			vm.isEve = true;
			vm.isStat = false;
			// vm.isAch = true;
		}
		vm.showAch = function() {
			vm.isBio = true;
			vm.isIns = true;
			vm.isEve = true;
			vm.isStat = true;
			// vm.isAch = false;
		}
	// console.log(vm.status.username);

		vm.logOut = function() {
					UserFactory.logOut();
					$state.go('Exit');
				};

		 vm.generateColor = function() {
				function randomRGB() {
					return Math.floor(Math.random() * 256);
				}
				for(var i = 0; i <=50; i +=1 ) {
					vm.red = randomRGB();
					vm.green = randomRGB();
					vm.blue = randomRGB();
					vm.rgbColor = 'rgb(' + vm.red + ',' + vm.green + ',' + vm.blue + ')';
					document.getElementById('color-container').innerHTML = '<div id="colorSq"style="margin:0 auto;background-color:' + vm.rgbColor + '"></div><h3>RGB('+ vm.red + ',' + vm.green + ',' + vm.blue + ')</h3>';
					// vm.timer =setInterval(function() { randomRGB(i++) }, 2000);
				}
		}
			vm.saveColor = function() {
				console.log(vm.newColor);
				HomeFactory.saveColor(vm.newColor).then(function(res) {
					vm.newColor = res;
				});
				vm.noColorMsg = false;
				vm.favorites = [];
				if (!vm.rgbColor ) {
					vm.newColor = '';
				}else {
					vm.newColor = vm.rgbColor;
					vm.favorites.push(vm.newColor);
					console.log(vm.newColor);
					for (var i = 0; i < vm.favorites.length; i++) {
						vm.counter += 1;
				document.getElementById('inside').innerHTML += '<li><div id="smSq"style="background-color:' + vm.favorites[i] + ';margin-left:125px;margin-bottom:-23px;margin-top:20px;margin-right:20px"></div><h5 >RGB('+ vm.red + ',' + vm.green + ',' + vm.blue + ')</h5></li>';
					}
				}
			}
			//------------------------------------------------

		 


	}
})();
