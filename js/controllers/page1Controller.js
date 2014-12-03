// 'use strict';


console.log("2 - page1Controller");

app.controller('page1Controller', function page1Controller($scope) {
        $scope.object = {
            'name': 'dude',
            'color': 'cobalt'
        };
            $scope.navigation = [
                    {
                        page: '/page1',
                        title: 'Page One'
                    },
                    {
                        page: '/page2',
                        title: 'Page Two'
                    },
                    {
                        page: '/page3',
                        title: 'Page Three'
                    },
                    {
                        page: '/page4',
                        title: 'Page Four'
                    }
            ];
});