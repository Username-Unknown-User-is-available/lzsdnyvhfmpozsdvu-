var coordinates = {};

$(document).ready(function(){

    var searchparam = new URLSearchParams(window.location.search);

    if(searchparam.has("source") && searchparam.has("destination")){

        var source = searchparam.get("source");

        var destination = searchparam.get("destination");

        coordinates.source_lat=source.split(";")[0];
        coordinates.source_lon=source.split(";")[1];

        coordinates.destination_lat=destination.split(";")[0];
        coordinates.destination_lat=destination.split(";")[1];
    }else{
        alert("Coordinates not selected.");
        window.history.back();
    };
})