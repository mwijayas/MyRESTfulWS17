/**
 * Created by Mahima on 3/19/2015.
 */


demoApp.controller('SimpleController', ['$scope', 'UserFactory', 'SimpleFactory', function ($scope, userFactory, simpleFactory) {
    /*$scope.myData = [
        {
            "date":"03-25-2015",
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true,
            "age": 45
        },
        {
            "date":"03-26-2015",
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false,
            "age": 35
        },
        {
            "date":"03-27-2015",
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false,
            "age": 25
        }
    ];*/
    //**********************


    $scope.myDataHeaders = [
        {
            'metric': 'READING',
            'data01': '3/1/2015',
            'data02': '3/2/2015',
            'data03': '3/3/2015',
            'data04': '3/4/2015',
            'data05': '3/5/2015',
            'data06': '3/6/2015',
            'data07': '3/7/2015',
            'data08': '3/8/2015',
            'data09': '3/9/2015',
            'data10': '3/10/2015',
            'data11': '3/11/2015',
            'data12': '3/12/2015',
            'call': 'Action'
        }
    ];

    $scope.myData = [
        {
            'metric': 'BP',
            'data01': '',
            'data02': '',
            'data03': '',
            'data04': '',
            'data05': '',
            'data06': '',
            'data07': '',
            'data08': '',
            'data09': '',
            'data10': '',
            'data11': '',
            'data12': ''
            //phone goes here
        },
        {
            'metric': 'Systolic',
            'data01': '123',
            'data02': '112',
            'data03': '113',
            'data04': '145',
            'data05': '156',
            'data06': '178',
            'data07': '145',
            'data08': '178',
            'data09': '197',
            'data10': '134',
            'data11': '123',
            'data12': '132'
            //phone goes here
        },
        {
            'metric': 'Diastolic',
            'data01': '90',
            'data02': '99',
            'data03': '45',
            'data04': '67',
            'data05': '23',
            'data06': '78',
            'data07': '98',
            'data08': '111',
            'data09': '111',
            'data10': '123',
            'data11': '124',
            'data12': '90'
            //phone goes here
        }
    ];

    var highlightCell = function highlightCell(grid, row, col, rowRenderIndex, colRenderIndex) {
        if ((grid.getCellValue(row,col) >= 145) && ($scope.myData[rowRenderIndex].metric === 'Systolic')) {
            return 'selected';
        }
        else if ((grid.getCellValue(row,col) >= 90) && ($scope.myData[rowRenderIndex].metric === 'Diastolic')) {
            return 'selected';
        }

    };

    $scope.gridOptions = {
        enableSorting: true,
        columnDefs: [
            {field: 'metric', displayName: $scope.myDataHeaders[0].metric, cellClass:'red', cellTooltip:true, enableColumnMoving:false},
            {field: 'data01', displayName: $scope.myDataHeaders[0].data01, cellClass:highlightCell},
            {field: 'data02', displayName: $scope.myDataHeaders[0].data02, cellClass:highlightCell},
            {field: 'data03', displayName: $scope.myDataHeaders[0].data03, cellClass:highlightCell},
            {field: 'data04', displayName: $scope.myDataHeaders[0].data04, cellClass:highlightCell},
            {field: 'data05', displayName: $scope.myDataHeaders[0].data05, cellClass:highlightCell},
            {field: 'data06', displayName: $scope.myDataHeaders[0].data06, cellClass:highlightCell},
            {field: 'data07', displayName: $scope.myDataHeaders[0].data07, cellClass:highlightCell},
            {field: 'data08', displayName: $scope.myDataHeaders[0].data08, cellClass:highlightCell},
            {field: 'data09', displayName: $scope.myDataHeaders[0].data09, cellClass:highlightCell},
            {field: 'data10', displayName: $scope.myDataHeaders[0].data10, cellClass:highlightCell},
            {field: 'data11', displayName: $scope.myDataHeaders[0].data11, cellClass:highlightCell},
            {field: 'data12', displayName: $scope.myDataHeaders[0].data12, cellClass:highlightCell},
            {field: 'call', displayName: $scope.myDataHeaders[0].call, cellTemplate:'<div><a href="#/" title="Call us"><img class="icon" alt=""/></a></div>'}
        ]
    };

    //******************

    /*$scope.gridOptions = {
        enableSorting: true

    };

    $scope.x = '03-25-2015';
    $scope.gridOptions.columnDefs = [
            { field: 'date', displayName:$scope.myData[0].date},
            { field: 'firstName', cellClass:'red', cellTooltip:true, enableColumnMoving:false},
            { field: 'lastName' },
            { field: 'company', cellTooltip:
                function( row, col ) {
                    return 'Name: ' + row.entity.firstName + '\'s Company: ' + row.entity.company;
                }
            },
            { field: 'age',
                cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                    if (grid.getCellValue(row,col) == 35) {
                        return 'selected';
                    }
                }
            },
            { field: 'employed'}

        ];
*/

    $scope.gridOptions.data = $scope.myData;



    $scope.testname = [];
    $scope.customers = [
        {name:'John Smith', city:'Phoenix'},
        {name:'John Doe', city:'New York'},
        {name:'Mahima Wijayasundara', city:'Drier'},
        {name:'Mahima Gayantha', city:'Colombo'},
        {name:'Mihin Wijayasundara', city:'Seattle'},
        {name:'Wasanthi', city:'Brier'}
    ];

    userFactory.get({}, function (userFactory) {
        $scope.testname = userFactory.name;
    })

    init();

    function init() {
        $scope.customers = simpleFactory.getCustomers();
    }

    $scope.addCustomer = function () {
        $scope.customers.push(
            {   name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            });
    };



    // ***** text editor: begin ******//
    $scope.data = {
        text: "hello"
    }
    $scope.disabled = false;
    $scope.menu = [['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'custom'], ['font']];

    $scope.custom = {
        'custom': {
            tag: 'button',
            classes: 'btn btn-default',
            text:'Custom',
            attributes: [{
                name: "title",
                value: 'Custom'
            }, {
                name: 'ng-click',
                value: 'alert(\'me\') '
            }, {
                name: 'ng-class',
                value: '{ active: isBold }'
            }],
            data: [{
                tag: 'i',
                classes: 'fa fa-bold'
            }]
        }
    };


    $scope.setDisabled = function(){
        $scope.disabled = !$scope.disabled;
    }


    // ***** text editor: end ******//


}]);

