(function() {
	'use strict';
	angular.module('app')
	.controller('EditProfileController', EditProfileController);


	function EditProfileController(UserFactory, ProfileFactory, $scope, $state) {
		var vm = this;
		vm.status = UserFactory.status;
		vm.colors = ['#f5f5f5','#b9f6ca','#ff80ab','#ffff8d', '#84ffff', '#80d8ff', '#448aff' ,'#b388ff', '#8c9eff', '#ff8a80'];


		vm.uploadPic = function(){
		      filepicker.setKey("ANDYMo7mqQjawgErCA0F0z");
		      filepicker.pick({
		          extension: ['.pdf','.jpg', 'jpeg','.png', '.gif'],
		          asText: true,
		          maxSize: 1024 * 1024 * 5, /* 5mb */
		          imageMax: [1500, 1500], /* 1500x1500px */
		          cropRatio: 1/1, /* Perfect squares */
		          services: ['*'] /* All available third-parties */
		      }, function(blob){
		          // Returned Stuff
		          var filename = blob.filename;
		          var url = blob.url;
		          var id = blob.id;
		          var isWriteable = blob.isWriteable;
		          // var mimetype = blob.mimetype;
		          var size = blob.size;
		        ProfileFactory.uploadPic(blob,vm.status._id).then(function(res){
		          vm.profile.pic = res;
		        });
		    });
		  };


	}
})();
