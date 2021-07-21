var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: "mapbox/light-v9",
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.geoJson(statesData).addTo(map);

var sample_data;
d3.selectAll("#selState_in").on("change", updateStateIN);
var state_value
var state_name

function updateStateIN (){
    var dropdownMenu = d3.select("#selState_in");
    state_name = dropdownMenu.property("value");


    d3.json("/api/test/"+ state_name).then(
        function(data){

            function getColor(c) {
                return c > 80500 ? '#800026' :
                    c > 69000  ? '#BD0026' :
                    c > 57500  ? '#E31A1C' :
                    c > 46000  ? '#FC4E2A' :
                    c > 34500  ? '#FD8D3C' :
                    c > 23000  ? '#FEB24C' :
                    c > 1  ? '#FED976' :
                    c = 0 ? 'FFF':
                                '#23F459';
                                // '#FFEDA0';
            }

            function style(feature) {
                state_value = feature.properties.inflow;
            
                return{
                    fillColor: getColor(state_value),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 1
            
                };
                
            }
            L.geoJson(data, {style: style}).addTo(map);
        })

};   
    
d3.selectAll("#selState_out").on("change", updateStateOUT);
function updateStateOUT (){
    var dropdownMenu = d3.select("#selState_out");
    state_name = dropdownMenu.property("value");


    d3.json("/api/test/"+ state_name).then(
        function(data){

            function getColor(c) {
                return c > 80500 ? '#800026' :
                    c > 69000  ? '#BD0026' :
                    c > 57500  ? '#E31A1C' :
                    c > 46000  ? '#FC4E2A' :
                    c > 34500  ? '#FD8D3C' :
                    c > 23000  ? '#FEB24C' :
                    c > 1  ? '#FED976' :
                    c = 0 ? 'FFF':
                                '#083AF3  ';
                                // '#FFEDA0';
            }

            function style(feature) {
                state_value = feature.properties.outflow;
            
                return{
                    fillColor: getColor(state_value),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 1
            
                };
                
            }
            L.geoJson(data, {style: style}).addTo(map);
            
           
        })

};