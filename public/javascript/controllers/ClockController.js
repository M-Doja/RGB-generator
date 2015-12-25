(function() {
	'use strict';
	angular.module('app')
	.controller('ClockController', ClockController);


	function ClockController(UserFactory, $state) {
		var vm = this;
		vm.title2 = 'Dashboard';
		vm.status = UserFactory.status;
		vm.user = {};
    vm.timerID;
    vm.countDown;
    vm.count;
    vm.setClock;
    vm.setBreak = null;
    // vm.minutes = Math.floor(vm.count / 60);
    // vm.seconds = Math.floor(vm.count % 60);
    // clearInterval(vm.countdown);
    // vm.countdown = setInterval(function() {
    //   if (vm.count > 59) {
    //     if (vm.seconds < 10 && vm.seconds >= 0) {
    //       vm.seconds = '0' + vm.seconds;
    //     }
    //     else if (vm.seconds < 0 ) {
    //       vm.minutes--;
    //       vm.seconds = vm.count % 60;
    //     }
    //     document.getElementById('display').innerHTML += vm.minutes + ":" + seconds + ' remaining!';
    //     vm.seconds--;
    //   }
    //   if (vm.count < 60 && vm.count >= 0) {
    //     document.getElementById('display').innerHTML += vm.count + " seconds remaining!";
    //     if (vm.count === 0) {
    //       // alert(alert_text); // alert text goes here
    //       document.getElementById('display').innerHTML = '';
    //     }
    //   }
    //   vm.count--; // you only need this once
    //   return;
    // }, 1000);



    vm.setClockTimer = function() {
    vm.timer = 5;
    
    }
   vm.delayedAlert = function() {
    vm.timerID = window.setInterval(vm.setClockTimer, 1000);
    // vm.timerID = window.setTimeout(vm.newNumber, 3000);
    }

    vm.newNumber = function() {
      document.getElementById('display').innerHTML = Math.floor(Math.random() * 10 );
    }



	}
})();
