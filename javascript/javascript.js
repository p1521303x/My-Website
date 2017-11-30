function initMap(){
      // Map options
      let options = {
        zoom:8,
		//corridinates of set to the marked place where store is located
        center:{lat:52.636670,lng:-1.136420}
      }

      // New map
      let map = new google.maps.Map(document.getElementById('map'), options);

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      // Array of markers
      let markers = [
        {
          coords:{lat:52.636670,lng:-1.136420},
     
        }
      ];

      // Loop through markers
      for(let i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        let marker = new google.maps.Marker({
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
          let infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }

	let i = 0; // Start point for the images
	let images = [];
	let time = 1000;

	// Image List
	images[0] = 'img/slides/nikemax90.jpg';
	width: 'auto';
	images[1] = 'img/slides/discount.jpg';
	width: 'auto';
	images[2] = 'img/slides/Nikeair.jpg';
	width: 'auto';
	images[3] = 'img/slides/Adidas.jpg';
	width: 'auto';

	// Change Image function
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

		