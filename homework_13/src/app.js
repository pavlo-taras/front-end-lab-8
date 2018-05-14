var app = angular.module('postPageApp', []);

app.controller('postController', function($scope, $filter) {
    
    $scope.title = "My Blog";
    $scope.posts = getDefaultPosts()
    $scope.tab = 'post';
    $scope.currentPost = 0;
    $scope.query = {}
    $scope.query["title"] = "";

    $scope.categories = $scope.posts.reduce((allCategories, currentPost) => {
        currentPost.categories.forEach((el) => {
            if (!allCategories.includes(el)) {
                allCategories.push(el)
            }
        });

        return allCategories;
    }, []);


    $scope.selectTab = function(setTab){
        $scope.tab = setTab;
        $scope.query.title = "";
    };
    
    $scope.isSelected = function(checkTab){            
        return $scope.tab === checkTab;
    };

    $scope.enableEditor = function(iPost) {
        $scope.currentPost = iPost;
        $scope.selectTab('edit/' + $scope.currentPost.toString())
        $scope.post = $scope.posts[$scope.currentPost];
        $scope.post.description = [$scope.post.description];
    };
        
    $scope.editPost = function() {
        $scope.post.description = this.post["description"][0];
        $scope.posts[$scope.currentPost] = $scope.post;
        $scope.selectTab('post')
    };

    $scope.addPost = function(){
        $scope.post.description = this.post["description"][0];
        $scope.posts.unshift(this.post);
        $scope.selectTab('post')
    };  

    $scope.customArrayFilter = function(item) {
        console.log("item = ", item)
        return $scope.posts.filter((post) => post.categories.includes(item));
    };

});
