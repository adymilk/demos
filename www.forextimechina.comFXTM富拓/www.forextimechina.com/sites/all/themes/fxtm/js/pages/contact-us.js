(function($){

$(function(){



    function contactUs(){

        var self = this;
        self.icon = '/sites/all/themes/fxtm/i/pages/map-pointer.png';

        self.defaultPosition = [];
        self.marker = [];
        self.cntrInfo = globalCountries;
        self.map;
        self.MY_MAPTYPE_ID = 'custom_style';

        self.fromLatLngToPixel = function (position) {
            var scale = Math.pow(2, self.map.getZoom());
            var proj = self.map.getProjection();
            var bounds = self.map.getBounds();

            var nw = proj.fromLatLngToPoint(
            new google.maps.LatLng(
                bounds.getNorthEast().lat(),
                bounds.getSouthWest().lng()
            ));
            
            var point = proj.fromLatLngToPoint(position);
            if(nw.x>200) nw.x-=256
            return new google.maps.Point(
                Math.floor((point.x - nw.x) * scale),
                Math.floor((point.y - nw.y) * scale)
            );
        }

        self.initialize = function(){

            // Markers
            var markers = [];
            $.each(cntrInfo, function(k,v){
                this.id = k;
                markers.push(this);
            })
             
            // Область показа маркеров
            var markersBounds = new google.maps.LatLngBounds();

            var featureOpts = [

                {
                    elementType: 'labels',
                    stylers: [
                        { visibility: 'on' }
                    ]
                }

            ];

            var mapOptions = {
            zoom: 3,
            center: new google.maps.LatLng(30, 15),
            mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID],
            noClear: true
            },


            mapTypeId: MY_MAPTYPE_ID
            };

            self.map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);


            $.each(markers,function(k,v){

                var markerPosition = new google.maps.LatLng(v.position[0], v.position[1]);
                // Add coordinates
                markersBounds.extend(markerPosition);

                // Create marker
                self.marker[k] = new google.maps.Marker({
                    position: markerPosition,
                    map: self.map,   
                    title: v.country,
                    icon: self.icon,
                    id: v.id
                }); 
                self.marker[k].setMap(self.map)

            })


            var styledMapOptions = {
                name: 'Global'
            }

            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions)

            self.map.mapTypes.set(MY_MAPTYPE_ID, customMapType)

        }

        google.maps.event.addDomListener(window, 'load', self.initialize);

    }
    contactUs();

});


})(jQuery)