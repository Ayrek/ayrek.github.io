$(".row_1").hide();
$("#indicator").hide();

$('#query').keyup(function () {
    // All code will be inside of this block
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");

    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data);

        // Begin building output
        var output = '<ol>';
        $.each(data.RESULTS, function (key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="//www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        });
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page

    });

});

// Get weather data from wunderground.com
function getData(lat, lon) {
    $.ajax({
        url: "//api.wunderground.com/api/fec15e5bcf9cd882/geolookup/conditions/forecast/q/" + lat + "," + lon + ".json",
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            $("#currentTemp").text(data.current_observation.temp_f + " \u00B0F");
            $('#hiTemp').text("Hi: " + data.forecast.simpleforecast.forecastday["0"].high.fahrenheit + " \u00B0F");
            $("#lowTemp").text("Low: " + data.forecast.simpleforecast.forecastday["0"].low.fahrenheit + " \u00B0F");
            $("#summary").text(data.current_observation.weather);
            $('#real_feel').text("Feels Like: " + data.current_observation.feelslike_f + " \u00B0F");
            $('#humidity').text("Humidity: " + data.current_observation.relative_humidity);
            $('#precip').text("Precipitation: " + data.current_observation.precip_today_string);
            $('#wind').text("Wind: " + data.current_observation.wind_string);
            $('#l_updated').text(data.current_observation.observation_time_rfc822);
            $('#location').text(data.location.city + ", " + data.location.state);
            $("#w_icon").html('<img src=' + data.current_observation.icon_url + ' alt=' + data.current_observation.icon + ' class= nowicon>');
            $("#cover").fadeOut(250);
        }
    });
}

// Intercept the menu link clicks
$("#searchResults").on("click", "a", function (evt) {
    evt.preventDefault();
    $("#title").hide();
    $('#searchResults').hide();
    $('#srchfrm').hide();
    $('.row_1').show();
    $("#indicator").show();


    var jsonCity = $(this).text();
    console.log(jsonCity);
    $.ajax({
        url: "//api.wunderground.com/api/5fabe86224c61a86/geolookup/conditions/q/" + jsonCity + ".json",
        dataType: "jsonp",
        success: function (data) {
            var lat = data.location.lat
            var lon = data.location.lon
            getData(lat, lon);
        }
    });
});

// A function for changing a string to TitleCase
function toTitleCase(str) {
    return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}