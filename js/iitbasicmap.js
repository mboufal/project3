function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(21.384, 111.181);
	var mapOptions = {
		center: myLocation,
		zoom: 14.5,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'iit-icon.png'
	});

	var contentString = '<h1>Chicken Island</h1><p>Chicken Island is an island located in the southeast of Dianbai district, Maoming, Guangdong province, China. Its original name is Fenzhou (汾洲) island and Wanzhou (湾舟) island. The area of Chicken Island is 1.9 square kilometers and it is the biggest island in Maoming. The highest point on Chicken island is 122 miles and the visibility of the sea area around it is between 6 and 12 miles. The climate of Chicken island is subtropical climate.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);