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
}