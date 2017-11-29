function initMap(){
      // Map options
      var options = {
        zoom:8,
		//corridinates of set to the marked place where store is located
        center:{lat:52.636670,lng:-1.136420}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      // Array of markers
      var markers = [
        {
          coords:{lat:52.636670,lng:-1.136420},
     
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }

	var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'img/slides/nikemax90.jpg';
	images[1] = 'img/slides/discount.jpg';
	images[2] = 'img/slides/Nikeair.jpg';
	images[3] = 'img/slides/Adidas.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;

		