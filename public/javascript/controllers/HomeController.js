(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController() {
		var vm = this;
		vm.title = 'RGB Random Colors Library';
		vm.red;
		vm.green;
		vm.blue;
		vm.rgbColor;
		vm.noColorMsg = true;
		vm.signUpMsg = true;
		vm.count = 0;
		vm.username = false;

		 vm.startColor = function() {
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
				vm.noColorMsg = false;
				vm.signUpMsg = false;
				vm.favorites = [];
				if (!vm.rgbColor && vm.username) {
					vm.newColor = '';
				}else {
					vm.newColor = vm.rgbColor;
					vm.favorites.push(vm.newColor);
					console.log(vm.newColor);
					for (var i = 0; i < vm.favorites.length; i++) {
						vm.count += 1;
				document.getElementById('inside').innerHTML += '<li><div id="smSq"style="background-color:' + vm.favorites[i] + ';margin-left:125px;margin-bottom:-23px;margin-top:20px;margin-right:20px"></div><h5 >RGB('+ vm.red + ',' + vm.green + ',' + vm.blue + ')</h5></li>';

					}
				}
			}


		// document.write(vm.html);
	}
})();
