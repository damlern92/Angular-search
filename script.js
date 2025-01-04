var searchApp = angular.module("searchApp",[]);
searchApp.controller("searchController",function($scope){
    $scope.items = [
        {
            name:"Samsung Galaxy A50",
            description:"The A50 comes with the latest Wi-Fi 802.11 ac along with dual-band (2.4/5 GHz) support. This device also features Bluetooth 5.0 Low-Energy, so you can have multiple devices connected without losing too much of your phone's battery. The A50 also gets FM radio, a feature many phones are losing these days.",
            image:"images/samsung-galaxy-a50.jpg"
        },
        {
            name:"Xiaomi Redmi Turbo 4",
            description:"The Xiaomi Redmi Turbo 4 combines high-end features and a sleek design with its glass front (Gorilla Glass Victus), plastic frame, and plastic back, offering a durable yet lightweight build. It is equipped with a Nano-SIM + Nano-SIM slot and is IP64-certified for dust and water resistance. The phone features a stunning 6.67-inch AMOLED display with 68 billion colors, supporting a 120Hz refresh rate, HDR10+, and Dolby Vision for vivid, high-quality visuals. The resolution of 1220 x 2712 pixels (~446 ppi density) ensures sharp, crisp imagery, protected by Corning Gorilla Glass Victus.",
            image:"images/redmi-turobo-4-black.jpg"
        },
        {
            name:"Lava Yuva 2 5G",
            description:"The Lava Yuva 2 5G offers a balanced combination of performance and design, featuring dimensions of 165 x 75.8 x 8.7 mm and weighing 190 g. It comes with dual Nano-SIM support and an IPS LCD display that measures 6.67 inches, offering a resolution of 720 x 1612 pixels (~265 ppi density) and a 90Hz refresh rate. The display delivers vibrant visuals and a peak brightness of 700 nits, ensuring clear viewing even in bright conditions.",
            image:"images/Lava-Yuva-2-5G.png"
        }
    ]
});

searchApp.filter("searchFor",function(){
    return function(arr, searchString){
        if(!searchString){
            return false;
        }

        result = [];

        searchString = searchString.toLowerCase();

        angular.forEach(arr, function(tel){
            if(tel.name.toLowerCase().indexOf(searchString) !== -1){
                result.push(tel);
            }
        });

        return result;
    } 
    
});