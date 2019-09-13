function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 52.520008,
            lng: 13.404954
        },
        zoom: 3,
        mapTypeControl: false,
        mapTypeId: 'roadmap'
    });

    // Searchbox

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);


    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    // Markers

    var markers = [];

    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }


        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];


        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };


            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    // Country markers
    $('#row').on('click', function() {

        $('#kenya').on('click', function() {
            new google.maps.Marker({
                position: {
                    lat: -4.036878,
                    lng: 39.669571
                },
                map: map,
                animation: google.maps.Animation.DROP
            });
        });

        $('#chile').on('click', function() {
            new google.maps.Marker({
                position: {
                    lat: -37.721037,
                    lng: -72.2093771
                },
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
        $('#hongkong').on('click', function() {
            new google.maps.Marker({
                position: {
                    lat: 22.286394,
                    lng: 114.149139
                },
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    });

    // Add a style-selector control to the map.
    var styleControl = document.getElementById('style-selector-control');
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(styleControl);

    // Set the map's style to the initial value of the selector.
    var styleSelector = document.getElementById('style-selector');
    map.setOptions({
        styles: styles[styleSelector.value]
    });

    // Apply new JSON when the user selects a different style.
    styleSelector.addEventListener('change', function() {
        map.setOptions({
            styles: styles[styleSelector.value]
        });
    });
}

var styles = {
    default: null,
    silver: [{
            elementType: 'geometry',
            stylers: [{
                color: '#f5f5f5'
            }]
        },
        {
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#616161'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#f5f5f5'
            }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#bdbdbd'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{
                color: '#eeeeee'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#757575'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#e5e5e5'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#ffffff'
            }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#757575'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#dadada'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#616161'
            }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{
                color: '#e5e5e5'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{
                color: '#eeeeee'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#c9c9c9'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        }
    ],

    night: [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
            }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
            }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#17263c'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#FF0631'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
            }]
        }
    ],
    red: [{
            elementType: 'geometry',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#242f3e'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#263c3f'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#6b9a76'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#38414e'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#212a37'
            }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9ca5b3'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#746855'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#1f2835'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#f3d19c'
            }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{
                color: '#2f3948'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#d59563'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#FF0631'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#515c6d'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#17263c'
            }]
        }
    ],

    retro: [{
            elementType: 'geometry',
            stylers: [{
                color: '#ebe3cd'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#523735'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#f5f1e6'
            }]
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#c9b2a6'
            }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#dcd2be'
            }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#ae9e90'
            }]
        },
        {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#93817c'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#a5b076'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#447530'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#f5f1e6'
            }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
                color: '#fdfcf8'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#f8c967'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#e9bc62'
            }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{
                color: '#e98d58'
            }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{
                color: '#db8555'
            }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#806b63'
            }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#8f7d77'
            }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#ebe3cd'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{
                color: '#dfd2ae'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{
                color: '#b9d3c2'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#92998d'
            }]
        }
    ],

    hiding: [{
            featureType: 'poi.business',
            stylers: [{
                visibility: 'off'
            }]
        },
        {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }
    ]
};