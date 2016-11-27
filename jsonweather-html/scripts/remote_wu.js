// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url : "http://api.wunderground.com/api/fec15e5bcf9cd882/geolookup/conditions/q/" + lat + ',' + long + ".json",
        dataType : "jsonp",
        success : function(data) {
            console.log(data);
            $('#currentTemp').text(data.current_observation.temp_f + " \u00B0F" );
            $('#summary').text(data.current_observation.weather);
            $('#real_feel').text("Feels Like: " + data.current_observation.feelslike_f + " \u00B0F");
            $('#precip').text("Precipitation: " + data.current_observation.precip_today_string);
            $('#wind').text(data.current_observation.wind_string);
            $('#l_updated').text(data.current_observation.observation_time_rfc822);
            $('#currentTemp').text(data.current_observation.temp_f + "\u00B0F");
            $('#cityDisplay').text(data.location.city + ", " + data.location.state);

      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
