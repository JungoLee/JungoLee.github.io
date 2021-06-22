

(function(){
	$(function(){
		loadData();
		insertData();
	});
	
	var weatherData;
	var imageArr = new Array(
						    "tornado.png",
						    "tropical_storm.png",
						    "hurricane.png",
						    "severe_thunderstorms.png",
						    "thunderstorms.png",
						    "mixed_rain_and_snow.png",
						    "mixed_rain_and_sleet.png",
						    "mixed_snow_and_sleet.png",
						    "freezing_drizzle.png",
						    "drizzle.png",
							
						    "freezing_rain.png",
						    "showers.png",
						    "showers.png",
							"snow_flurries.png",
							"light_snow_showers.png",
							"blowing_snow.png",
							"snow.png",
							"hail.png",
							"sleet.png",
							"dust.png",
							
							"foggy.png",
							"haze.png",
							"smoky.png",
							"blustery.png",
							"windy.png",
							"cold.png",
							"cloudy.gif",
							"mostly_cloudy.png",
							"mostly_cloudy.png",
							"partly_cloudy.png",
							
							"partly_cloudy.png",
							"clear.png",
							"sunny.png",
							"fair.png",
							"fair.png",
							"mixed_rain_and_hail.png",
							"hot.png",
							"isolated_thunderstorms.png",
							"scattered_thunderstorms.png",
							"scattered_thunderstorms.png",
							
							"scattered_showers.png",
							"heavy_snow.png",
							"scattered_snow_showers.png",
							"heavy_snow.png",
							"partly_cloudy.png",
							"thundershowers.png",
							"snow_showers.png",
							"isolated_thundershowers.png"												
							);
							
	var bgArr = new Array(
							   "rain.gif",
							   "rain.gif",
							   "rain.gif",
							   "rain.gif",
							   "rain.gif",
							   "snow.gif",
							   "rain.gif",
							   "snow.gif",
							   "snow.gif",
							   "rain.gif",
							   
							   
							   "rain.gif",
							   "rain.gif",
							   "rain.gif",
							   "snow.gif",
							   "snow.gif",
							   "snow.gif",
							   "snow.gif",
							   "rain.gif",
							   "snow.gif",
							   "cloudy.gif",
							   
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   "cloudy.gif",
							   
							   "cloudy.gif",
							   "sunny.gif",
							   "sunny.gif",
							   "sunny.gif",
							   "sunny.gif",
							   "rain.gif",
							   "sunny.gif",
							   "rain.gif",
							   "rain.gif",
							   "rain.gif",
							 											   
							   "rain.gif",
							   "snow.gif",
							   "snow.gif",
							   "snow.gif",
							   "cloudy.gif",
							   "rain.gif",
							   "snow.gif",
							   "rain.gif"
							   );
	
	function loadData(){
		var query = 'select item from weather.forecast where woeid=1132599 and u="c"';
		var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";
		
		$.ajaxSetup({
			async:false 
		});
		
		$.getJSON(url, function(data){
		    console.log(data);
			weatherData = data; 
		});
	}
	
	function insertData(){
		var afterDayEl = $('#header > .afterDay');
		var todayEl = $('#header > .today');
		var todayTemp = todayEl.find('> .temp > .c');
		var todayDate = todayEl.find('> .date');
		var todayWeatherIcon = afterDayEl.find('> .weather_icon > img');
		var iconRoot = 'img/weather_icon/';
		var bgRoot = 'img/weather_bg/';
		var secondHighTemp = afterDayEl.find('> .dateweek > .number > .high');
        var secondLowTemp = afterDayEl.find('> .dateweek > .number > .low');
        var secondDate = afterDayEl.find('> .dateweek > .datecontent');
        var thirdHighTemp = afterDayEl.find('> .dateweek > .number02 > .high');
        var thirdLowTemp = afterDayEl.find('> .dateweek > .number02 > .low');
        var thirdDate = afterDayEl.find('> .dateweek > .datecontent02');
        
		var condition = weatherData.query.results.channel.item.condition; 
		var forecast = weatherData.query.results.channel.item.forecast; 
		
		todayTemp.text(condition.temp);
		todayDate.text(forecast[0].day + ' ,' + forecast[0].date);
		if ('Sun'===forecast[0].day) {
			forecast[0].day='일';
		} else if ('Mon'===forecast[0].day) {
			forecast[0].day='월';
		} else if ('Tue'===forecast[0].day) {
			forecast[0].day='화';
		} else if ('Wed'===forecast[0].day) {
			forecast[0].day='수';
		} else if ('Thu'===forecast[0].day) {
			forecast[0].day='목';
		} else if ('Fri'===forecast[0].day) {
			forecast[0].day='금';
		} else {
			forecast[0].day='토';
		}
		todayDate.text(forecast[0].day + ' ,' + forecast[0].date);	
		
		var todayCode = parseInt(forecast[0].code);
		var iconURL = iconRoot + imageArr[todayCode];
		todayWeatherIcon.attr('src', iconURL); 
		
		var bgURL = bgRoot + bgArr[todayCode];
        $('#weather').css('background-image','url(' + bgURL + ')');
        
		secondHighTemp.text(forecast[1].high);
		secondLowTemp.text(forecast[1].low);
		secondDate.text(forecast[1].date);
		
		thirdHighTemp.text(forecast[2].high);
		thirdLowTemp.text(forecast[2].low);
		thirdDate.text(forecast[2].date);
	}
	
})(jQuery);