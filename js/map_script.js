  let map;

  function initMap() {
 const alaska = { lat: 64.4732, lng: -141.7543 }; 
 const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: alaska,
  });
  

 const newhempshire = new google.maps.Marker({
    position:  { lat: 43.832136851688446, lng: -71.16347600763956 },
    map: map,
	title: "Chickville, NH",
	animation: google.maps.Animation.BOUNCE,
  });
 const idaho = new google.maps.Marker({
    position:  { lat: 43.61054824483881, lng: -115.25809501804838 },
    map: map,
	title: "FeatherVille, ID",
	animation: google.maps.Animation.BOUNCE,
  });
 const newmwx = new google.maps.Marker({
    position:  { lat: 32.69535196826175, lng: -107.1534012343764 },
    map: map,
	title: "Hatch, NM",
	animation: google.maps.Animation.BOUNCE,
  });
 const oregon = new google.maps.Marker({
    position:  { lat: 45.5440012825436, lng: -122.25130990599997 },
    map: map,
	title: "Rooster Rock, OR",
	animation: google.maps.Animation.BOUNCE,
  });
 /* const alaska = new google.maps.Marker({
    position:  { lat: 64.4732, lng: -141.7543 },
    map: map,
	title: "Chicken, AL",
	animation: google.maps.Animation.BOUNCE,
  });*/
  const contentString ="<h2>Chicken, AL</h2><p>Chicken is a U.S. census-designated place in Southeast Fairbanks Census Area, Alaska. It is a community founded on gold mining, and is one of the few surviving gold rush towns in Alaska. The population was 7 at the time of the 2010 Census, down from 17 in 2000. However, usually year round, there are 17 inhabitants. Due to mining, Chicken's population peaks during the summer. It has frequently been noted on lists of unusual place names.</p>"
  + "Zoom out to see other location with chicken-related names";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: alaska,
    map,
    title: "Chicken, AL",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

}