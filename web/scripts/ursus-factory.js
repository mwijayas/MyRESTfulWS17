/**
 * Created by Mahima on 3/19/2015.
 */

demoApp.factory('UserFactory', function ($resource) {
    return $resource('/rest/hello/singleUser', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});

demoApp.factory('SimpleFactory', function(){
    var customers = [
        {name:'John Smith', city:'Phoenix'},
        {name:'John Doe', city:'New York'},
        {name:'Mahima Wijayasundara', city:'Drier'},
        {name:'Mahima Gayantha', city:'Colombo'},
        {name:'Mihin Wijayasundara', city:'Seattle'},
        {name:'Wasanthi', city:'Brier'}
    ];

    var factory = {};
    factory.getCustomers = function() {
        return customers;
    }

    factory.postCustomer = function() {

    }

    return factory;
});
